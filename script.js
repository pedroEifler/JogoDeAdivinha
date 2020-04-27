window.onload = function() {
    var numeroAleatorio = Math.floor(Math.random() * 7) + 1;

    var palpite = document.querySelector('.palpite');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var baixoOuAlto = document.querySelector('.baixoOuAlto');
    var envioPalpite = document.querySelector('.envioPalpite');
    var campoPalpite = document.getElementById('inputPalpite');
    var cidade = ['pomerode', 'blumenau', 'gaspar', 'ilhota', 'ascurra', 'navegantes', 'indaial', 'timbo']

    var resultado = cidade[numeroAleatorio];
    console.log("Resposta é: " + resultado);
    var tentativa = 0;

    function conferirPalpite() {
        var palpiteUsuario = String(campoPalpite.value);
        limparValores();
        if (!palpiteUsuario) {
            alert("Digite um número válido!");
            return;
        }
        tentativa++;
        if (resultado === palpiteUsuario.toLowerCase()) {
            ultimoResultado.textContent = 'Parabens! vc acertou!';
            ultimoResultado.style.backgroundColor = 'green';
            fimJogo();
            return;
        }
        if (tentativa === 5) {
            ultimoResultado.textContent = 'Game Over';
            ultimoResultado.style.backgroundColor = 'red';
            fimJogo();
            return;
        }
        palpite.textContent = palpite.textContent + palpiteUsuario + ' ';
    }

    function fimJogo() {
        campoPalpite.disabled = true;
        envioPalpite.disabled = true;
        botaoReiniciado = document.createElement('button');
        botaoReiniciado.textContent = 'Iniciar novo jogo';
        document.body.appendChild(botaoReiniciado);
        botaoReiniciado.addEventListener('click', reiniciarJogo);
    }

    function limparValores() {
        campoPalpite.value = '';
        campoPalpite.focus();
    }

    function reiniciarJogo() {
        palpite.textContent = '';
        tentativa = 0;
        document.body.removeChild(botaoReiniciado);
        campoPalpite.disabled = false;
        envioPalpite.disabled = false;
        ultimoResultado.style.backgroundColor = "white";
        ultimoResultado.textContent = '';
        numeroAleatorio = Math.floor(Math.random() * 7) + 1;
        resultado = cidade[numeroAleatorio];
        console.log(numeroAleatorio);
        console.log(resultado)
        limparValores();
    }

    envioPalpite.addEventListener('click', conferirPalpite);

}