const generateRGBcolor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

const updateColor = () => {
    const color = generateRGBcolor();
    const ColorBox = document.getElementById('ColorBox');
    const ColorCode = document.getElementById('ColorCode');

    ColorBox.style.backgroundColor = color;
    ColorCode.innerText = color;
}

const CopyColorCode = () => {
    const ColorCode = document.getElementById('ColorCode');
    const inputTag = document.createElement('input');
    document.body.appendChild(inputTag);
    inputTag.value = ColorCode.innerText;

    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag);

    alert('color copied to clipboard');
}


document.getElementById('CopyBtn').addEventListener('click', () => {
    CopyColorCode();
})

function generateNewColor () {
    updateColor();
}


