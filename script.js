window.onload = function() {
    var tentativas = document.querySelector('.tentativas');
    var resultadoFinal = document.querySelector('.resultadoFinal');
    var inputEnviar = document.querySelector('.inputEnviar');
    var campoPalpite = document.querySelector('.campoPalpite');
    var resultado = gerarCidadeAleatoria();
    var numeroTentativa = 0;

    function conferirPalpite() {
        var palpiteUsuario = String(campoPalpite.value);

        limparValores();

        if (!palpiteUsuario) {
            alert("Digite uma cidade válida!");
            return;
        }
        if (resultado === palpiteUsuario.toLowerCase()) {
            resultadoFinal.textContent = 'Parabens! você acertou!';
            resultadoFinal.style.backgroundColor = 'green';
            fimJogo();
            return;
        }
        numeroTentativa = adicionarTentativas();

        if (numeroTentativa === 5) {
            resultadoFinal.textContent = 'Game Over';
            resultadoFinal.style.backgroundColor = 'red';
            fimJogo();
            return;
        }

        tentativas.textContent += palpiteUsuario + ', ';
    }

    function fimJogo() {
        campoPalpite.disabled = true;
        inputEnviar.disabled = true;
        botaoReiniciado = document.createElement('button');
        botaoReiniciado.textContent = 'Iniciar novo jogo';
        botaoReiniciado.className = 'botaoReiniciar';
        document.body.appendChild(botaoReiniciado);
        botaoReiniciado.addEventListener('click', reiniciarJogo);
    }

    function limparValores() {
        campoPalpite.value = '';
        campoPalpite.focus();
    }

    function reiniciarJogo() {
        tentativas.textContent = '';
        numeroTentativa = 0;
        document.body.removeChild(botaoReiniciado);
        campoPalpite.disabled = false;
        inputEnviar.disabled = false;
        resultadoFinal.style.backgroundColor = "white";
        resultadoFinal.textContent = '';
        resultado = gerarCidadeAleatoria();
        limparValores();
    }

    function gerarCidadeAleatoria() {
        var cidade = ['pomerode', 'blumenau', 'gaspar', 'ilhota', 'ascurra', 'navegantes', 'indaial', 'timbo']
        var numeroAleatorio = Math.floor(Math.random() * cidade.length);
        var resultado = cidade[numeroAleatorio];
        console.log("Resposta é: " + resultado);
        return resultado;
    }

    function adicionarTentativas() {
        numeroTentativa++;
        var tentativa = document.querySelector(".numeroTentativas");
        animacaoTentativa(tentativa);
        return tentativa.textContent = numeroTentativa;
    }

    function animacaoTentativa(tentativa) {
        for (let num = 1; num <= 5; num++) {
            if (numeroTentativa == num) {
                tentativa.classList.add("tentativasNvl" + num)
                if (numeroTentativa - 1 != 0) {
                    tentativa.classList.remove("tentativasNvl" + numeroTentativa - 1)
                }
            }
        }
    }

    inputEnviar.addEventListener('click', conferirPalpite);
}