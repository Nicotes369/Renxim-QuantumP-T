// JavaScript for Quantum Computer Mode - Matrix Effect

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const quantumMode = body.classList.contains('quantum-mode');

    if (quantumMode) {
        initializeBinaryRain();
    }

    // Language select event listener to trigger quantum mode
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (e) => {
        if (e.target.value === 'qc') {
            body.classList.add('quantum-mode');
            initializeBinaryRain();
        } else {
            body.classList.remove('quantum-mode');
            removeBinaryRain();
        }
    });
});

function initializeBinaryRain() {
    const binaryBg = document.createElement('div');
    binaryBg.classList.add('binary-bg');
    document.body.appendChild(binaryBg);

    for (let i = 0; i < 100; i++) {
        createBinaryStream(binaryBg);
    }
}

function createBinaryStream(container) {
    const binaryStream = document.createElement('div');
    binaryStream.classList.add('binary-char');
    binaryStream.style.left = Math.random() * 100 + 'vw';
    binaryStream.style.animationDuration = 10 + Math.random() * 20 + 's';
    binaryStream.textContent = Math.random() > 0.5 ? '0' : '1';
    container.appendChild(binaryStream);

    setInterval(() => {
        binaryStream.textContent = Math.random() > 0.5 ? '0' : '1';
    }, 500);
}

function removeBinaryRain() {
    const binaryBg = document.querySelector('.binary-bg');
    if (binaryBg) {
        binaryBg.remove();
    }
}
