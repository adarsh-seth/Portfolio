let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener("click" , (event) => {
     menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
})

document.addEventListener("click" , (event) => {
    if( !navbar.contains(event.target) && !menuIcon.contains(event.target)){
        navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
    }
})

navlinks.forEach((link) => {
    link.addEventListener("click" , (event) =>{
         navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
    })
})

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
// const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.classList.add("disabled");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://formspree.io/f/xzdnydjj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });

        if (response.ok) {
            // Clear all fields
            form.reset();

            // Show success message
            // successMessage.style.display = "block";

            // Hide it after 3 seconds
            // setTimeout(() => {
                // successMessage.style.display = "none";
                
            // }, 3000);
            alert("Message sent successfully!");
            
        } else {
            alert("Failed to send message.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
    submitBtn.classList.remove("disabled");
});




