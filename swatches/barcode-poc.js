const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const video = document.querySelector('#preview');
const output = document.querySelector('#barcodeOutput');
const status = document.querySelector('#status');

let stream = null;
let detector = null;
let rafId = null;
let lastValue = null;

const setStatus = (message) => {
  status.textContent = message;
};

const setOutput = (text, format = '') => {
  if (text === lastValue) {
    return;
  }
  lastValue = text;
  const label = format ? `${text}\n\nformat: ${format}` : text;
  output.textContent = label;
};

const stopScanLoop = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
};

const stopCamera = () => {
  stopScanLoop();

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }

  video.srcObject = null;
  startButton.disabled = false;
  stopButton.disabled = true;
  setStatus('Camera stopped.');
};

const scanLoop = async () => {
  if (!detector || !stream) {
    return;
  }

  try {
    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      const results = await detector.detect(video);
      if (results.length > 0) {
        const [result] = results;
        setOutput(result.rawValue || '(no data)', result.format || '');
        setStatus('Barcode detected.');
      } else {
        setStatus('Scanning...');
      }
    }
  } catch (error) {
    setStatus(`Scan error: ${error.message}`);
  }

  rafId = requestAnimationFrame(scanLoop);
};

const startCamera = async () => {
  if (!('BarcodeDetector' in window)) {
    setStatus('BarcodeDetector API is not supported in this browser.');
    return;
  }

  try {
    detector = new BarcodeDetector({
      formats: [
        'code_128',
        'code_39',
        'code_93',
        'ean_13',
        'ean_8',
        'itf',
        'upc_a',
        'upc_e',
        'qr_code',
      ],
    });

    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
      },
      audio: false,
    });

    video.srcObject = stream;
    await video.play();

    startButton.disabled = true;
    stopButton.disabled = false;
    setStatus('Camera on. Point at a barcode.');
    scanLoop();
  } catch (error) {
    setStatus(`Camera error: ${error.message}`);
    stopCamera();
  }
};

startButton.addEventListener('click', startCamera);
stopButton.addEventListener('click', stopCamera);

window.addEventListener('beforeunload', stopCamera);
