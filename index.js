const button = document.getElementById("generatePassword");
const label = document.getElementById("password");

const passwordRandomizer = "qwertyuiopasdfghjklzxcvbnm!@#$%^"

button.onclick = function() {
    let index = Math.random() * 31;
    let password = "";

    while(password.length < 12) {
        password += passwordRandomizer.charAt(index);
        index = Math.random() * 31;
    }

    label.textContent = password;

}