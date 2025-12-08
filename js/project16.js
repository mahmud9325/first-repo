const qrGenerate = () => {
    const qrtextInput = document.getElementById('qrtextInput').value;
    const qrImage = document.getElementById('qrImage');

    if (qrtextInput.trim() !== "") {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrtextInput)}`;
    }
    else{
        alert('Please Enter The Text Or Url');
    }
}