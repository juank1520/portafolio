
class AnimationIndex {
    constructor(){
        this.navbar = document.getElementsByClassName('c-full-menu__navbar')[0];
        this.navbarLinks = document.getElementsByClassName('c-full-menu__navbar-link');
    }

    openNavbar(){
        if (! this.navbar.classList.contains('is-open')){
            this.navbar.classList.add('is-open');
        }
    }

    closeNavbar(){
        if (this.navbar.classList.contains('is-open')){
            this.navbar.classList.remove('is-open');
        }
    }

    getMenuLinks(){
        const menuLinks = [];
        for(let items of this.navbarLinks){
            menuLinks.push(items);
        }
        return menuLinks;
    }


}

export default AnimationIndex;
