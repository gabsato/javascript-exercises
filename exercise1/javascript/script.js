function verifyEnter(event) {
    if (event.key === "Enter") {
        const nameUser = document.getElementById('inputUser').value;
        const textWelcome = `Olá ${nameUser}, seja bem-vindo(a) ao mundo da programação!`;
        const welcomeElement = document.getElementById('textWelcome'); // Defina a variável welcomeElement
        welcomeElement.innerHTML = textWelcome;

        // Adicione a classe para iniciar a animação
        document.getElementById('inputUser').classList.add('fadeOut');

        // Antes da animação, oculte o elemento
        setTimeout(() => {
            document.getElementById('inputUser').style.display = 'none';
        }, 2000);
    }
}