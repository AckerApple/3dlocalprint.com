import QrScanner from "https://unpkg.com/qr-scanner@1.4.2/qr-scanner.min.js";
import {
  tag,
  callback,
  div,
  pre,
  span,
  output,
  onDestroy,
  onInit,
  htmlTag,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";

QrScanner.WORKER_PATH =
  "https://unpkg.com/qr-scanner@1.4.2/qr-scanner-worker.min.js";

const video = htmlTag("video");

export const QrScannerPanel = tag(({onResult}) => {
  QrScannerPanel.updates((args) => {
    [{onResult}] = args;
    onResult = output(onResult);
  });
  onResult = output(onResult);

  let scanner = null;
  let status = "Idle.";
  let lastText = "";
  const previewId = `qrPreview-${Math.random().toString(36).slice(2, 9)}`;

  const setStatus = (message) => {
    console.log("[qr] status:", message);
    status = message;
  };

  const stopScanner = () => {
    if (!scanner) return;
    console.log("[qr] stop");
    scanner.stop();
    scanner.destroy();
    scanner = null;
    setStatus("Camera stopped.");
  };

  const onDecoded = callback((result) => {
    console.log("[qr] decode result:", result);
    lastText = result?.data || "";
    setStatus("QR detected.");
    onResult(lastText);
  })

  const startScanner = async () => {
    try {
      console.log("[qr] start");
      setStatus("Requesting camera access...");
      const preview = await new Promise((resolve, reject) => {
        let attempts = 0;
        const tick = () => {
          const element = document.getElementById(previewId);
          if (element) {
            return resolve(element);
          }
          attempts += 1;
          if (attempts > 30) {
            return reject(new Error("QR preview element not found"));
          }
          requestAnimationFrame(tick);
        };
        tick();
      });
      console.log("[qr] preview element:", preview);
      scanner = new QrScanner(
        preview,
        onDecoded,
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          preferredCamera: "environment",
        }
      );
      console.log("[qr] scanner created:", scanner);
      await scanner.start();
      console.log("[qr] scanner started");
      setStatus("Scanning...");
    } catch (error) {
      console.error("[qr] camera error:", error);
      setStatus(`Camera error: ${error.message || error}`);
    }
  };

  onDestroy(() => {
    stopScanner()
    console.log('🔴 stop scanner')
  });
  
  onInit(() => {
    startScanner();
  });

  return div(
    { class: "qr-panel" },
    div(
      { class: "qr-preview" },
      video({
        id: previewId,
        playsInline: true,
        muted: true,
      })
    ),
    div(
      { class: "qr-output" },
      span({ class: "qr-label" }, "QR Text"),
      pre({ class: "qr-text" }, () => lastText || "(no scan yet)")
    ),
    div({ class: "qr-status" }, () => status)
  );
});
