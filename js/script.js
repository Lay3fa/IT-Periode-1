document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling voor navigatie
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Eenvoudige formulierafhandeling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const naam = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const bericht = this.querySelector('textarea').value;
            
            // Hier zou je normaal gesproken een server aanroepen
            console.log('Formulier ingevuld:', {naam, email, bericht});
            alert('Bedankt voor je bericht, ' + naam + '!');
            this.reset();
        });
    }
});