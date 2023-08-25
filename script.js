window.addEventListener('DOMContentLoaded', (event) => {
    // Reproducir el audio automáticamente
    const audio = document.getElementById('musica');
    audio.play();

    // Mostrar el mensaje "aguante boca"
    const mensaje = document.createElement('div');
    mensaje.innerText = 'aguante boca';
    mensaje.style.color = 'darkblue';
    mensaje.style.fontSize = '24px';
    mensaje.style.textAlign = 'center';
    mensaje.style.position = 'absolute';
    mensaje.style.top = 'calc(20% - 2cm)'; // Ajusta la posición vertical
    mensaje.style.left = '50%';
    mensaje.style.transform = 'translateX(-50%)';
    document.body.appendChild(mensaje);
});