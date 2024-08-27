const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

//the letter "a" is converted to "ai"
//the letter "e" is converted to "enter"
//the letter "i" is converted to "imes"
//the letter "o" is converted to "ober"
//the letter "u" is converted to "ufat"

function btnEncrypted(){
    const encryptedText = encrypt(textArea.value)
    message.value = encryptedText
    textArea.value = ""; //Clear field
    // Hide background image and texts
    message.style.backgroundImage = "none";
    document.querySelector('.text-container').style.display = "none";
}

function encrypt(stringEncrypted){ 
    let matrixCode = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase(); //to convert text to lowercase
    for(let i=0; i<matrixCode.length; i++){ //To make a tour
        if(stringEncrypted.includes(matrixCode[i][0])){ //condition
            stringEncrypted = stringEncrypted.replace(new RegExp(matrixCode[i][0], 'g'), matrixCode[i][1]);

        }    
    } 
    return stringEncrypted //The entire process is carried out to give the result
}

function btnDecrypted(){
    const decryptedText = decrypted(textArea.value)
    message.value = decryptedText
    textArea.value = "";
    message.style.backgroundImage = "none"
}
function decrypted(stringDecrypted){ 
    let matrixCode = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase(); 
    for(let i=0; i<matrixCode.length; i++){ 
        if(stringDecrypted.includes(matrixCode[i][1])){
            stringDecrypted = stringDecrypted.replace(new RegExp(matrixCode[i][1], 'g'), matrixCode[i][0]); 
        }    
    } 
    return stringDecrypted;
}

// Function to copy text to clipboard
function copyToClipboard() {
    const textToCopy = message.value; 
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Text copie!");
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    } else {
        alert("No text to copy!");
    }
}