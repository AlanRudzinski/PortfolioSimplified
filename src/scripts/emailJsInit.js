import emailjs from 'emailjs-com';

export default () => {
    emailjs.init('user_ZMT6q1IDn6Pr8CQ2meU83');


    document.getElementsByClassName('contact-form')[0].addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_yg3hwwh', 'template_v9ieybh', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}