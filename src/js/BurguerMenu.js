import SlideAnimations from "./SlideAnimations";

class BurguerMenu{
    constructor(){
        this.burgerButton = document.getElementsByClassName('c-burguer')[0];

        this.animations = new SlideAnimations();
        this.burgerButton.addEventListener('click', this.toggleBurgerButton.bind(this));
    }


    async closeBurguer(){
        if (this.burgerButton.classList.contains('c-burguer--is-open')) {
            this.burgerButton.classList.remove('c-burguer--is-open');
            await this.animations.menuMobieHide();
        }
    }

    async toggleBurgerButton(){
        if (this.burgerButton.classList.contains('c-burguer--is-open')){
            this.burgerButton.classList.remove('c-burguer--is-open');
            await this.animations.menuMobieHide();
        }else if (! this.burgerButton.classList.contains('c-burguer--is-open')){
            this.burgerButton.classList.add('c-burguer--is-open')
            await this.animations.menuMobieShow();
        }
    }
}

export default BurguerMenu;
