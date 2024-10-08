// JavaScript for Language Handling and Quantum Computer Mode
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const languageSelect = document.getElementById('language-select');

    // Initial check for Quantum Computer mode
    if (languageSelect.value === 'qc') {
        body.classList.add('quantum-mode');
        initializeBinaryRain();
    }

    // Language select event listener to handle mode change
    languageSelect.addEventListener('change', (e) => {
        if (e.target.value === 'qc') {
            body.classList.add('quantum-mode');
            initializeBinaryRain();
        } else {
            body.classList.remove('quantum-mode');
            removeBinaryRain();
        }
        updateLanguage(e.target.value);
    });
});

function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    fetch(`assets/languages/${language}.json`)
        .then((response) => response.json())
        .then((translations) => {
            elements.forEach((element) => {
                const key = element.getAttribute('data-i18n');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        })
        .catch((error) => {
            console.error('Error loading language file:', error);
        });
}

// Quantum Computer Mode Initialization
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
