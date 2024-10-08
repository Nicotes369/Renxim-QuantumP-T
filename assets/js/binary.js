// JavaScript for Binary Effect Enhancements and Improvements

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

    for (let i = 0; i < 150; i++) {
        createBinaryStream(binaryBg);
    }
}

function createBinaryStream(container) {
    const binaryStream = document.createElement('span');
    binaryStream.classList.add('binary-char');
    binaryStream.style.left = Math.random() * 100 + 'vw';
    binaryStream.style.animationDuration = 10 + Math.random() * 25 + 's';
    binaryStream.textContent = Math.random() > 0.5 ? '0' : '1';
    container.appendChild(binaryStream);

    setInterval(() => {
        binaryStream.textContent = Math.random() > 0.5 ? '0' : '1';
    }, 300);

    // Remove the binary stream after its animation ends to conserve memory
    binaryStream.addEventListener('animationend', () => {
        container.removeChild(binaryStream);
        createBinaryStream(container);
    });
}

function removeBinaryRain() {
    const binaryBg = document.querySelector('.binary-bg');
    if (binaryBg) {
        binaryBg.remove();
    }
}
