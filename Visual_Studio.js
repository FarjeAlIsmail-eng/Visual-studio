function animateTitle() {
    const title = document.getElementById("title");
    let position = 0;
    let interval = setInterval(frame, 10);

    function frame() {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position++;
            title.style.transform = `translateX(${position}px)`;
        }
    }
}
