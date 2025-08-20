// =========================
// Navigation between sections
// =========================
const sections = document.querySelectorAll(".container");
const controls = document.querySelectorAll(".control");
const themeBtn = document.querySelector(".theme-btn");

// Page navigation (sidebar buttons)
controls.forEach(control => {
    control.addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        control.classList.add("active-btn");

        document.querySelector(".active").classList.remove("active");
        const sectionId = control.getAttribute("data-id");
        document.getElementById(sectionId).classList.add("active");
    });
});

// =========================
// Theme toggle (light/dark mode)
// =========================
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// =========================
// Download CV button(s)
// =========================
document.querySelectorAll(".main-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (btn.textContent.includes("Download CV")) {
            e.preventDefault();
            // Change this to your actual CV file path
            const cvFile = "files/CV.pdf"; 
            const link = document.createElement("a");
            link.href = cvFile;
            link.download = "CV.pdf";
            link.click();
        }
    });
});
