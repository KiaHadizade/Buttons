let buttons = document.querySelectorAll(".button")

for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons[i]);

    buttons[i].addEventListener("click", (e) => {
        // ignore refreshing the page
        e.preventDefault()

        // Create a span tag
        let overlay = document.createElement("span")
        // Add overlay class to this span
        overlay.classList.add("overlay")
        // add this span to the button
        e.target.appendChild(overlay)

        // console.log(e.clientX);
        let xValue = e.clientX - e.target.offsetLeft
        let yValue = e.clientY - e.target.offsetTop

        overlay.style.left = xValue + "px"
        overlay.style.top = yValue + "px"

        // Remove the span after its done!
        buttons[i].addEventListener("animationend", (e) => {
            overlay.remove();
        });

    })
}