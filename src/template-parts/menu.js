const menu = () => {
    const view = `
        <div class="c-full-menu">
            <div class="c-full-menu__burguer-menu c-burguer">
                <div class="c-burguer__button-line c-burguer__button-line--one"></div>
                <div class="c-burguer__button-line c-burguer__button-line--two"></div>
                <div class="c-burguer__button-line c-burguer__button-line--three"></div>
            </div>
            <ul class="c-full-menu__navbar">
                <li class="c-full-menu__navbar-item">
                    <a class="c-full-menu__navbar-link" href="#">
                        Resumen
                    </a>
                </li>
                <li class="c-full-menu__navbar-item">
                    <a class="c-full-menu__navbar-link c-full-menu__navbar-link--is-active" href="#/projects">
                        Proyectos
                    </a>
                </li>
                <li class="c-full-menu__navbar-item">
                    <a class="c-full-menu__navbar-link" href="#/experiments">
                        Experimentos
                    </a>
                </li>
            </ul>

            <div class="c-full-menu__my-name">
                <h1 class="c-my-name__my-name-title">Juan Carlos García S.</h1>
            </div>

        </div>
    `;


    return view;
}

export default menu;