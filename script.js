// The AIMS Website Script

document.addEventListener("DOMContentLoaded", () => {

```
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameField = document.querySelector('input[type="text"]');
        const name = nameField ? nameField.value : "Visitor";

        alert(
            `Thank you ${name}! Your message has been received. The AIMS team will contact you soon.`
        );

        form.reset();
    });
}

// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId !== "#") {

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

console.log("The AIMS Website Loaded Successfully");
```

});
