let qrCodeValue = "";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const resultDiv = document.getElementById('result');
const valueDiv = document.getElementById('value');

// Acessa a webcam
navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Erro ao acessar a webcam: ", err);
    });

const scanQRCode = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
        if (qrCodeValue !== code.data) {
            qrCodeValue = code.data;
            resultDiv.textContent = `QR Code detectado!`;
            resultDiv.style.color = "green";

            valueDiv.textContent = `${qrCodeValue}`;
            valueDiv.style.color = "green";

            console.log("Valor do QR Code:", qrCodeValue);
        }
    } else {
        resultDiv.textContent = "Procurando QR Code...";
        resultDiv.style.color = "red";
    }

    requestAnimationFrame(scanQRCode);
};

video.addEventListener('play', scanQRCode);
