const extractText = () => {
    const fileInput = document.getElementById('imageInput');
    const outPutDiv = document.getElementById('outPut');

    const imageFile = fileInput.files[0];

    if(!imageFile){
     outPutDiv.textContent = 'Please select an image file.'
     return;
    }

    Tesseract.recognize(
        imageFile,
        'eng'
    ).then(({data}) => {
     outPutDiv.textContent = data.text;
    }).catch( (error) => {
       console.error('Error');
       
    })
}