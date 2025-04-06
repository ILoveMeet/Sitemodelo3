/* Adiciona função ao player */

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");

    // Tenta iniciar a reprodução quando a página carrega
    audio.addEventListener("canplay", () => {
        audio.play().catch(err => console.log("Autoplay bloqueado pelo navegador:", err));
    });

    // Botão de Play/Pause
    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});



/* Adiciona função o cronometro */

function atualizarCronometro() {
    const inicio = new Date("2025-04-05T00:00:00"); // <<< Altere para sua data
    const agora = new Date();
    let diff = agora - inicio;

    let segundos = Math.floor(diff / 1000) % 60;
    let minutos = Math.floor(diff / (1000 * 60)) % 60;
    let horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Atualiza o conteúdo formatado
    document.getElementById("tempo").innerHTML = `${anos} ano${anos !== 1 ? 's' : ''}, ${meses} meses, ${dias} dias`;
    document.getElementById("tempo-detalhado").innerHTML = `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o cronômetro a cada segundo
setInterval(atualizarCronometro, 1000);

// Inicializa ao carregar a página
atualizarCronometro();



/* Adiciona função as fotos */

document.addEventListener("DOMContentLoaded", function() {
    const imagens = document.querySelectorAll("#fotos img");
    let index = 0;

    // Garante que a primeira imagem começa visível
    imagens[index].classList.add("active");

    setInterval(() => {
        imagens[index].classList.remove("active");
        index = (index + 1) % imagens.length; // Volta ao início após a última imagem
        imagens[index].classList.add("active");
    }, 3000); // Troca a cada 3 segundos
});



/* Adiciona função ao footer */

// Função para redirecionar para o instagram
function redirecionarParaPagina1() {
    window.open("https://www.instagram.com/ilovemeet_ofc/", "_blank");
}