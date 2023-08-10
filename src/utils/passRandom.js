class GeneratePass {

    async generatePass() {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%&()-_=+[{]}<>?';
      
        let password = '';
        
        password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      
        for (let i = 0; i < 2; i++) {
          const characters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
          password += characters[Math.floor(Math.random() * characters.length)];
        }
    
        password = password.split('').sort(() => 0.5 - Math.random()).join('');
      
        return password;
      }
      
}

export default GeneratePass;  