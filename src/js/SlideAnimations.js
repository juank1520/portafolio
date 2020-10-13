import { TimelineLite, Power2, CSSPlugin } from 'gsap/all'

const plugins = [ CSSPlugin ];
const tl = new TimelineLite();

class SlideAnimations{

    async fadeIn(duration = 0.5){
        await tl.to(
            '.c-slide',
            0,
            {opacity: "0", ease: Power2.easeInOut},
        ).to(
            '.c-slide',
            duration,
            {opacity: "1", ease: Power2.easeInOut},
        );
        return true;
    }

    async fadeOut(duration = 0.5){
        await tl.to(
            '.c-slide',
            0,
            {opacity: "1", ease: Power2.easeInOut},
        ).to(
            '.c-slide',
            duration,
            {opacity: "0", ease: Power2.easeInOut},
        );
        return true;
    }

    async swipeIn(duration = 2){
        await tl.to(
            '.c-slide',
            0,
            {opacity: "1", left:'-105vw' , ease: Power2.easeInOut}
        ).to(
            '.c-slide',
            duration,
            {left: "0", opacity:'1', ease: Power2.easeInOut},
        );
    }

    async swipeOut(duration = 2){
        await tl.to(
            '.c-slide',
            0,
            {opacity: "1", left:'0' , ease: Power2.easeInOut}
        ).to(
            '.c-slide',
            duration,
            {left: "105vw", opacity:'1', ease: Power2.easeInOut}
        );
    }

    async menuMobieShow(){
        await tl.to(
            '.c-full-menu__navbar',
            0,
            {left: "-105vw", ease: Power2.easeInOut}
        ).to(
            '.c-full-menu__navbar',
            1,
            {left: "0", ease: Power2.easeInOut}
        );
        return true;
    }

    async menuMobieHide(){
        await tl.to(
            '.c-full-menu__navbar',
            0,
            {left: "0", ease: Power2.easeInOut}
        ).to(
            '.c-full-menu__navbar',
            1,
            {left: "-105vw", ease: Power2.easeInOut}
        );
        return true;
    }
}

export default SlideAnimations;
