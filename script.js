function encryptText() {
    const textInput = document.getElementById('textInput').value;
    const shift = 3; // Puedes cambiar el valor del desplazamiento
    let encryptedText = '';

    for (let i = 0; i < textInput.length; i++) {
        let charCode = textInput.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            // Otros caracteres
            encryptedText += String.fromCharCode(charCode);
        }
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const textInput = document.getElementById('textInput').value;
    const shift = 3; // Puedes cambiar el valor del desplazamiento
    let decryptedText = '';

    for (let i = 0; i < textInput.length; i++) {
        let charCode = textInput.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            // Otros caracteres
            decryptedText += String.fromCharCode(charCode);
        }
    }

    document.getElementById('outputText').value = decryptedText;
}
