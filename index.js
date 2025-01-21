// Configurações do Typewriter
const text = "Rian Messias"; // Texto que será exibido
const typingSpeed = 100; // Velocidade de digitação em milissegundos
const deletingSpeed = 150; // Velocidade de deleção em milissegundos
const pauseTime = 30000; // Tempo de pausa após digitar a frase

let i = 0; // Índice atual da letra
let isDeleting = false; // Flag para indicar se está deletando
const typewriterText = document.getElementById("typewriter-text");
const typewriterCursor = document.getElementById("typewriter-cursor");

function typeWriter() {
    const currentText = text.substring(0, i); // Substring do texto atual
    typewriterText.textContent = currentText; // Define o texto no elemento

    if (!isDeleting) {
        if (i < text.length) {
            i++;
            setTimeout(typeWriter, typingSpeed); // Continuar digitando
        } else {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeWriter, deletingSpeed); // Pausar antes de deletar
            }, pauseTime);
        }
    } else {
        if (i > 0) {
            i--;
            setTimeout(typeWriter, deletingSpeed); // Continuar deletando
        } else {
            isDeleting = false;
            setTimeout(typeWriter, typingSpeed); // Recomeçar a digitação
        }
    }
}

// Iniciar o efeito após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});
