// JavaScript for GreenPoint Website
function scanItem() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = "📸 More features coming soon!";
    resultElement.style.opacity = "0";

    // Add Fade-in Effect
    setTimeout(() => {
        resultElement.style.transition = "opacity 0.5s ease-in-out";
        resultElement.style.opacity = "1";
    }, 100);

    // Add Button Animation
    const button = document.querySelector('button');
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 150);
}
