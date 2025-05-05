function encrypt(text) {
    var encrypted = "";
  
    for (var i = 0; i < text.length; i++) {
      var ascii = text.charCodeAt(i);
      var shiftedAscii = ascii + (i + 1) + 2;
      encrypted += String.fromCharCode(shiftedAscii);
    }
  
    var reversed = "";
    for (var j = encrypted.length - 1; j >= 0; j--) {
      reversed += encrypted.charAt(j);
    }
  
    return reversed;
  }
  
  function decrypt(encryptedText) {
    var reversed = "";
    for (var i = encryptedText.length - 1; i >= 0; i--) {
      reversed += encryptedText.charAt(i);
    }
  
    var decrypted = "";
    for (var j = 0; j < reversed.length; j++) {
      var ascii = reversed.charCodeAt(j);
      var originalAscii = ascii - 2 - (j + 1);
      decrypted += String.fromCharCode(originalAscii);
    }
  
    return decrypted;
  }
  
  function handleEncrypt() {
    var input = document.getElementById("inputText").value;
    var output = encrypt(input);
    document.getElementById("outputText").textContent = output;
  }
  
  function handleDecrypt() {
    var input = document.getElementById("inputText").value;
    var output = decrypt(input);
    document.getElementById("outputText").textContent = output;
  }
  