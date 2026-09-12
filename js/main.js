"use strict";

// Bootstrap handles the accessible menu toggle; section links use native anchors.
const header = document.getElementById("header");
const menu = document.getElementById("fixedNavbar");
const toggle = document.querySelector(".navbar-toggler");
const backToTop = document.querySelector(".scroll-top-btn");
function updateHeader() {
    const scrolled = window.scrollY > 85;
    header.classList.toggle("header-shrink", scrolled);
    backToTop.classList.toggle("active", scrolled);
    backToTop.tabIndex = scrolled ? 0 : -1;
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
menu.addEventListener("click", function(event) {
    if (event.target.closest("a") && menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
});
menu.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
        toggle.focus();
    }
});
if ("IntersectionObserver" in window) {
    const links = Array.from(menu.querySelectorAll('a[href^="#"]'));
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            const link = links.find(function(item) { return item.hash === "#" + entry.target.id; });
            if (entry.isIntersecting) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
        });
    }, { rootMargin: "-85px 0px -55% 0px" });
    links.forEach(function(link) { observer.observe(document.querySelector(link.hash)); });
}
Filaous_ContactForm();

function Filaous_ContactForm() {
    "use strict";

    const form = document.getElementById("contactForm");
    if (!form) return;
    const button = document.getElementById("contactBtn");
    const buttonText = button.querySelector(".text");
    const status = document.getElementById("contactStatus");

    // Native validation runs before submit and invalid events do not bubble.
    form.addEventListener("invalid", function() {
        status.textContent = "Please complete all required fields and enter a valid email address before sending.";
    }, true);

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        if (button.disabled || !form.reportValidity()) return;

        button.disabled = true;
        buttonText.textContent = "Sending...";
        form.setAttribute("aria-busy", "true");
        status.textContent = "Sending your message...";
        let timeout;

        try {
            const controller = new AbortController();
            timeout = setTimeout(function() { controller.abort(); }, 15000);
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
                signal: controller.signal
            });
            if (!response.ok) throw new Error("Form submission failed");

            form.reset();
            status.textContent = "Thank you. Your message has been submitted successfully.";
        } catch (error) {
            status.textContent = "I couldn't confirm that your message was submitted. Your text has been kept. Please try again or use the Email Me link.";
        } finally {
            clearTimeout(timeout);
            button.disabled = false;
            buttonText.textContent = "Send Message";
            form.removeAttribute("aria-busy");
        }
    });
}
