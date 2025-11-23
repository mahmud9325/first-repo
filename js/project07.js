const generatePassword = () => {
    const  lengthPass = document.getElementById('lengthPass').value;
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+*/";

    let randomPassword = '';

    for(let i = 0; i < lengthPass; i++){
        const randomIndex = Math.round(Math.random() * charSet.length);
        const randomChar = charSet[randomIndex];
        randomPassword += randomChar;

    }
    document.getElementById('showPassword').innerText = randomPassword;

}