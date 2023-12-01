let slideIndex = 0;

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 2000); // Change slide every 2000 milliseconds (2 seconds)
    }

    // Call the function to start the slideshow
    showSlides();

    function sendEmail() {
        // Set the email address and subject
        var emailAddress = 'athifali08@gmail.com';
        var subject = 'I need to buy - ' + window.location.href;
    
        // Create the mailto link
        var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
    
        // Open the user's default email client
        window.location.href = mailtoLink;
    }
    