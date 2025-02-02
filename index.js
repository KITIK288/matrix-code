function getRandomBinary() {
    return Math.random() < 0.5 ? '0' : '1';
}

function createFallingString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomBinary();
    }
    return result;
}

function createFallingText() {
    const fallingText = document.createElement('div');
    fallingText.className = 'falling-text';
    fallingText.textContent = createFallingString(100);
    fallingText.style.left = '0'; // Позиция по горизонтали
    fallingText.style.animation = 'fall 5s linear infinite';
    document.querySelector('.falling-text-container').appendChild(fallingText);

    // Обновляем текст во время падения
    let updateInterval = setInterval(() => {
        fallingText.textContent = createFallingString(100);
    }, 100);

    // Удаляем элемент после завершения анимации
    fallingText.addEventListener('animationiteration', () => {
        clearInterval(updateInterval);
        fallingText.remove();
    });
}

setInterval(createFallingText, 100);