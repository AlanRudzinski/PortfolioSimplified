import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export default () => {
    emailjs.init('user_ZMT6q1IDn6Pr8CQ2meU83');
    const form = document.getElementsByClassName('contact-form')[0]

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_yg3hwwh', 'template_v9ieybh', this)
            .then(function() {
                swal({
                    title: "Message sent",
                    text: "Thank you! your message has been sent!",
                    icon: "success"
                })
                form.reset()
            }, function(error) {
                swal({
                    title: "Something went wrong...",
                    text: "Sorry something has gone wrong with sending your message",
                    icon: "failure"
                })            
                form.reset()

            });

            });
}