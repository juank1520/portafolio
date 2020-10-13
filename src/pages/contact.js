const contact = () => {
    const view = `
        <h3 class="c-contact__title">Escríbeme para que trabajemos juntos</h3>
        <div class="c-contact__container">
            <form class="c-contact__form">
                <input class="c-contact__input  js-contact-form-name" type="text" placeholder="Nombre *">
                <input class="c-contact__input  js-contact-form-company" type="text" placeholder="Empresa">
                <input class="c-contact__input  js-contact-form-email" type="text" placeholder="Correo Electrónico *">
                <input class="c-contact__input  js-contact-form-phone" type="text" placeholder="Teléfono">
                <textarea class="c-contact__input c-contact__input--body  js-contact-form-message" placeholder="Mensaje *"></textarea>
            </form>

            <input class="c-contact__sendButton js-contact-form-send" type="button" value="Enviar">
            <p class="c-contact__form-response c-contact__form-response--error  js-contact-form-response"></p>
        </div>
    `;

    return view;
}

export default contact;