import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Автоматически находим все файлы в папке assets
const assets = [
    "/fonts/FOT-Matisse Pro EB.otf",
    "/ds-fire.png", "/hero-background.png", "/audio.mp3", "/message-modal-icon.png", "/message-modal.png", "/message-symbol.png"]

function preloadAssets(list) {
    return new Promise((resolve) => {
        let loadedCount = 0;
        const onLoad = () => {
            loadedCount++;
            if (loadedCount === list.length) resolve();
        };

        list.forEach(src => {
            if (/\.(mp3|wav|ogg)$/i.test(src)) {
                const audio = new Audio();
                audio.src = src;
                audio.oncanplaythrough = onLoad;
                audio.onerror = onLoad;
            } else if (/\.(png|jpe?g|gif|webp)$/i.test(src)) {
                const img = new Image();
                img.src = src;
                img.onload = onLoad;
                img.onerror = onLoad;
            } else {
                fetch(src).finally(onLoad);
            }
        });
    });
}

(async function init() {
    await preloadAssets(assets);

    const audio = document.getElementById("bg-music");
    audio.play().catch((e) => {
        console.log('catch', e)
        document.addEventListener("click", () => audio.play(), { once: true });
    });

    document.body.style.background = "";

    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App/>
        </StrictMode>
    );

})();
