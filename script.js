AOS.init({ duration: 1000, once: true })

// The typing effect
new Typed("#typing", {
    strings: ['Jaymar H. Maruji', 'UI/UX Designer.', 'Web Developer.', 'Creative Thinker.', 'Building Solution.'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true

});

const serviceSelect = document.getElementById("service_type");
const otherService = document.getElementById("other_service");

serviceSelect.addEventListener("change", function () {

    if (this.value === "Other") {

        otherService.style.display = "block";
        otherService.required = true;

    } else {

        otherService.style.display = "none";
        otherService.required = false;
        otherService.value = "";

    }

});

