  // Configurações do Typewriter
  const text = "Rian Messias";
  const typingSpeed = 150; // Velocidade de digitação em milissegundos
  const deletingSpeed = 100; // Velocidade de deleção em milissegundos
  const pauseTime = 2000; // Tempo de pausa após digitar a frase

  let i = 0; // Índice atual da letra
  let isDeleting = false; // Flag para indicar se está deletando
  let loopCount = 0; // Contador de loops (opcional)
  const typewriterText = document.getElementById("typewriter-text");
  const typewriterCursor = document.getElementById("typewriter-cursor");

  function typeWriter() {
      const currentText = text.substring(0, i);
      typewriterText.innerHTML = currentText;

      if (!isDeleting) {
          if (i < text.length) {
              i++;
              setTimeout(typeWriter, typingSpeed);
          } else {
              // Pausa após terminar de digitar
              setTimeout(() => {
                  isDeleting = true;
                  setTimeout(typeWriter, deletingSpeed);
              }, pauseTime);
          }
      } else {
          if (i > 0) {
              i--;
              setTimeout(typeWriter, deletingSpeed);
          } else {
              isDeleting = false;
              setTimeout(typeWriter, typingSpeed);
          }
      }
  }

  // Iniciar o efeito após o carregamento da página
  document.addEventListener("DOMContentLoaded", function() {
      typeWriter();
  });