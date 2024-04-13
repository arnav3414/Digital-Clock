function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours || 12;
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

function changeColor() {
    const clock = document.getElementById('clock');
    clock.style.color = clock.style.color === '#61de0d' ? '#ff4f4f' : '#61de0d';
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}

function onClickText(textElement, text) {
    alert(`You clicked on: ${text}`);
}

const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        shape.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        shape.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    });
});
