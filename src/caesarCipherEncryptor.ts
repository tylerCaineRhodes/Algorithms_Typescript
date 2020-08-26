const caesarCipherEncryptor = (str: string, key: number): string => {
  let newString = '';
  const newKey = key % 26;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let newCode = charCode + newKey;

    if (newCode <= 122) {
      newString += String.fromCharCode(newCode);
    } else {
      let adjustedCode = 96 + (newCode % 122);
      newString += String.fromCharCode(adjustedCode);
    }
  }
  return newString;
}
