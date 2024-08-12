document.addEventListener('scroll', () => {
    const leg = document.getElementById('leg');
    const ball = document.getElementById('ball');

    // Kick animation
    leg.style.transform = 'rotate(-45deg)';

    // Ball shoot animation
    ball.style.transform = 'rotate(360deg)';
    ball.style.left = '70%';
    ball.style.bottom = '70%';

    // Reset animation after a delay
    setTimeout(() => {
        leg.style.transform = 'rotate(0deg)';
    }, 200);
});
