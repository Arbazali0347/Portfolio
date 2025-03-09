async function displayAlbums() {
    let text = await fetch("http://127.0.0.1:5500/info.json")
    let response = await text.json()
    document.querySelectorAll(".percentage").forEach(e => {
        // let song = e.querySelectorAll(".percentage")
        console.log(e)
    })

}


document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-container");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let container = entry.target;
                let percentageText = container.querySelector(".percentage").textContent.trim();
                let percentage = parseInt(percentageText.replace("%", ""));
                let circle = container.querySelector(".progress");
                let circleLength = 283;
                let offset = circleLength - (percentage / 100) * circleLength;
                circle.style.transition = "stroke-dashoffset 1.5s ease-in-out"; // Smooth animation
                circle.style.strokeDasharray = circleLength;
                circle.style.strokeDashoffset = offset;

                observer.unobserve(container); // Animate only once
            }
        });
    }, { threshold: 0.6 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

displayAlbums()

// const toggleBtn = document.getElementById('theme-toggle');
// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('light-mode');
// });