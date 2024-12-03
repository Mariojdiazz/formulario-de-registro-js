document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    
  
    const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
  
    function validateUsername() {
      if (!usernameRegex.test(usernameInput.value)) {
        alert("El nombre de usuario debe tener entre 3 y 15 caracteres y solo puede contener letras, números, guiones y guiones bajos.");
        usernameInput.classList.add('error');
        return false;
      } else {
        usernameInput.classList.remove('error');
        return true;
      }
    }
  
 
    function validateEmail() {
      if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        emailInput.classList.add('error');
        return false;
      } else {
        emailInput.classList.remove('error');
        return true;
      }
    }
  

    function validatePassword() {
      if (!passwordRegex.test(passwordInput.value)) {
        alert("La contraseña debe tener al menos 8 caracteres, 1 letra mayúscula, 1 minúscula, 1 número y 1 carácter especial.");
        passwordInput.classList.add('error');
        return false;
      } else {
        passwordInput.classList.remove('error');
        return true;
      }
    }
  

    function validateConfirmPassword() {
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Las contraseñas no coinciden.");
        confirmPasswordInput.classList.add('error');
        return false;
      } else {
        confirmPasswordInput.classList.remove('error');
        return true;
      }
    }
  
   
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
  
  
      if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword()) {
        alert("¡Registro exitoso!");
    
      }
    });
  });
  