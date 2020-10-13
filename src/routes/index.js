import AnimationIndex from "../js/AnimationIndex";
import SlideAnimations from "../js/SlideAnimations";

import resume from "../pages/resumen";
import experiments from "../pages/experiments";
import projects from "../pages/projects";

import getHash from "../utils/getHash";


const routes = {
    '/': resume,
    'projects': projects,
    'experiments': experiments,
};


const router = async () => {
    const idContent = document.getElementById('content');



    let hash = getHash();
    let render = routes[hash] ? routes[hash] : routes['/'];
    idContent.innerHTML = await render();

    const menuAnimation = new AnimationIndex();
    const animations = new SlideAnimations();

    if( hash !== '/' ){
        await menuAnimation.openNavbar();
    }else{
        await menuAnimation.closeNavbar();
    }
    animations.fadeIn().then();
}

export default router;