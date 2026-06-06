```javascript
// The AIMS Website Script

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name =
                document.querySelector('input[type="text"]').value;

            alert(
                `Thank you ${name || "Visitor"}! Your message has been received. The AIMS team will contact you soon.`
            );

            form.reset();
        });
    }

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
```
