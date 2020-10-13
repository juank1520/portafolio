class ContactForm {
    constructor(){
        this.jsContactFormSend = document.getElementsByClassName('js-contact-form-send')[0];
        this.jsContactFormResponse = document.getElementsByClassName('js-contact-form-response')[0];

        this.jsContactFormName = document.getElementsByClassName('js-contact-form-name')[0];
        this.jsContactFormCompany = document.getElementsByClassName('js-contact-form-company')[0];
        this.jsContactFormEmail = document.getElementsByClassName('js-contact-form-email')[0];
        this.jsContactFormPhone = document.getElementsByClassName('js-contact-form-phone')[0];
        this.jsContactFormMessage = document.getElementsByClassName('js-contact-form-message')[0];

        this.jsContactFormSend.addEventListener('click', this.sendForm.bind(this))
    }

    async sendForm(){
        if( (this.jsContactFormName.value === '') || (this.jsContactFormEmail.value === '') || ( this.jsContactFormMessage.value === '' ) ){
            this.jsContactFormResponse.classList.add('c-contact__form-response--error');
            this.jsContactFormResponse.innerText = 'Asegúrese de llenar los campos Nombre, Email y Mensaje';
            return;
        }

        const formData = new FormData;
        formData.append('contactForm', 'sendContact');
        formData.append('contactForm', 'sendContact');
        formData.append('name', this.jsContactFormName.value);
        formData.append('company', this.jsContactFormCompany.value);
        formData.append('email', this.jsContactFormEmail.value);
        formData.append('phone', this.jsContactFormPhone.value);
        formData.append('message', this.jsContactFormMessage.value);


        const url = 'http://email.jcgs.work';
        this.jsContactFormSend.classList.add('is-disable');
        this.jsContactFormSend.value = 'Enviando...';


        const response = await fetch(url + '/form.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.text();
        if (data === 'true') {
            this.jsContactFormResponse.classList.remove('c-contact__form-response--error');
            this.jsContactFormResponse.innerText = 'Garcias por tu mensaje, me comunicaré contigo lo antes posible ';
            clearForm(5000);
        }else{
            this.jsContactFormResponse.classList.add('c-contact__form-response--error');
            this.jsContactFormResponse.innerText = 'Error al enviar el formulario';
        }
        this.jsContactFormSend.classList.remove('is-disable');
        this.jsContactFormSend.value = 'Enviar';

    }

}

function clearForm(time) {
    setTimeout( ()=>{
        this.jsContactFormName.value = null;
        this.jsContactFormCompany.value = null;
        this.jsContactFormEmail.value = null;
        this.jsContactFormPhone.value = null;
        this.jsContactFormMessage.value = null;
        this.jsContactFormResponse.innerText = '';
    } ,time);
}

export default ContactForm;
