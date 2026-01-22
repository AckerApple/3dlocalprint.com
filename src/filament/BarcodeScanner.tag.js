import {
  tag,
  callback,
  div,
  pre,
  span,
  output,
  onDestroy,
  htmlTag,
} from "taggedjs";

const video = htmlTag("video");

export const BarcodeScannerPanel = tag(({ onResult, formats }) => {
  BarcodeScannerPanel.updates((args) => {
    [{ onResult, formats }] = args;
    onResult = output(onResult);
  });
  onResult = output(onResult);

  const activeFormats =
    Array.isArray(formats) && formats.length
      ? formats
      : [
          "code_128",
          "code_39",
          "code_93",
          "ean_13",
          "ean_8",
          "itf",
          "upc_a",
          "upc_e",
          "qr_code",
        ];

  let status = "Idle.";
  let lastText = "";
  let lastFormat = "";
  let detector = null;
  let stream = null;
  let rafId = null;
  const previewId = `barcodePreview-${Math.random().toString(36).slice(2, 9)}`;

  const setStatus = (message) => {
    console.log("[barcode] status:", message);
    status = message;
  };

  const setOutput = (text, format) => {
    lastText = text || "";
    lastFormat = format || "";
  };

  const stopScanner = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      stream = null;
    }
    detector = null;
    setStatus("Camera stopped.");
  };

  const onDetected = callback((value) => {
    onResult(value);
  });

  const scanLoop = async (preview) => {
    if (!detector || !stream) {
      return;
    }

    try {
      if (preview.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        const results = await detector.detect(preview);
        if (results.length > 0) {
          const [result] = results;
          const rawValue = result.rawValue || "";
          const format = result.format || "";
          if (rawValue) {
            onDetected(rawValue);
          }
          setOutput(rawValue || "(no data)", format);
          setStatus("Barcode detected.");
        } else {
          setStatus("Scanning...");
        }
      }
    } catch (error) {
      setStatus(`Scan error: ${error.message || error}`);
    }

    rafId = requestAnimationFrame(() => scanLoop(preview));
  };

  const startScanner = async () => {
    if (!("BarcodeDetector" in window)) {
      setStatus("BarcodeDetector API is not supported in this browser.");
      return;
    }

    try {
      setStatus("Requesting camera access...");
      const preview = await new Promise((resolve) => {
        let attempts = 0;
        const tick = () => {
          const element = document.getElementById(previewId);
          if (element) {
            return resolve(element);
          }
          attempts += 1;
          if (attempts > 60) {
            return resolve(null);
          }
          requestAnimationFrame(tick);
        };
        tick();
      });

      if (!preview) {
        setStatus("Barcode preview not ready.");
        return;
      }

      detector = new BarcodeDetector({
        formats: activeFormats,
      });

      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
        audio: false,
      });

      preview.srcObject = stream;
      await preview.play();
      setStatus("Scanning...");
      scanLoop(preview);
    } catch (error) {
      console.error("[barcode] camera error:", error);
      setStatus(`Camera error: ${error.message || error}`);
      stopScanner();
    }
  };

  onDestroy(() => {
    stopScanner();
    console.log("🔴 stop barcode scanner tag destroyed");
  });

  startScanner();

  const formatLabel = () => {
    if (!lastText) return "";
    if (!lastFormat) return lastText;
    return `${lastText}\n\nformat: ${lastFormat}`;
  };

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
      span({ class: "qr-label" }, "Barcode Data"),
      pre({ class: "qr-text" }, () => formatLabel() || "(no scan yet)")
    ),
    div({ class: "qr-status" }, () => status)
  );
});
