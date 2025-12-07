const gernerateBtn = () => {
    const lengthNum = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

     let password = '';

    for(let i = 0; i < lengthNum; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        
    }
    document.getElementById('password').innerText = password;
    checkStrngth(password);
}

const checkStrngth = (password) => {
    let strngth = 0;

    if (password.length >= 8) {
        strngth++;
    }
    if (/[A-Z]/.test(password)) {
        strngth++;
    }
    if (/[0-9]/.test(password)) {
        strngth++;
    }
    if (/[!@#$%&]/.test(password)) {
        strngth++;
    }
    const strngthText = ['Weak', 'Mediam', 'Strong', 'Vary Strong'] [strngth -1] || 'Weak';
    document.getElementById('strength').innerText = `
     strength: ${strngthText}
    `;
    changeColor(strngth);
}

const changeColor = (strngth) => {
    const colors = ['red', 'black', 'green', 'aqua'];
    document.body.style.backgroundColor = colors[strngth -1] || 'red';
}