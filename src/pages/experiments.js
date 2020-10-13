import gitHubLogo from '../assets/imgs/portafolio.jpg'


const experimentsElements = [
    {
        title: 'Portafolio',
        img: gitHubLogo,
        description: 'Single page application, empaquetada en Webpack, desarrollada en HTML, Sass y JavaScript Vanilla,',
        link: '',
        repo: 'https://github.com/juank1520/portafolio',
    },
    {
        title: 'Simon Says',
        img: gitHubLogo,
        description: 'Juego de Simon says, desarrollada únicamente en JavaScript JavaScript Vanilla,',
        link: '',
        repo: 'https://github.com/juank1520/simonSays',
    },
    {
        title: 'Simon Says vs',
        img: gitHubLogo,
        description: 'Juego de Simon says para jugar en modo versus, en esta versión utilicé web sokets para que los dos jugadores se conectaran a tiempo real',
        link: '',
        repo: 'https://github.com/juank1520/simonSays',
    },
    {
        title: 'Métodos numéricos',
        img: gitHubLogo,
        description: 'Esta es una librería que contiene funciones que resuelven operaciones matemáticas por medio de métodos numéricos',
        link: '',
        repo: 'https://github.com/juank1520/metodos-numericos',
    },
    {
        title: 'Weather web scraper',
        img: gitHubLogo,
        description: 'Es un notebook de jupiter que utilicé para extraer los datos del clima de la página https://www.wunderground.com/history/monthly/LRTR/date',
        link: '',
        repo: 'https://github.com/juank1520/weather-scraper',
    }
];

const experiments = () => {
    const view = `
        <div id="experiments" class="c-slide c-slide--two-colums-elements">
            <div class="c-slide__colum">
                <div class="c-slide__title">
                    <h2 class="c-title">Experimentos</h2>
                    <span class="c-slide__description">Estos son algunos proyectos personales y experimentos que me han ayudado a formarme como desarrollador</span>
                    <span class="c-slide__description">Pueden encontrar el código de todos los proyectos en <a style="font-weight: 600" href="https://github.com/juank1520/">mi GitHub</a></span>
                </div>
                <div class="c-slide__element">
                
                    ${experimentsElements.map( item => `
                       <div class="c-slide-project">
                            <div class="c-slide-project__thumb-image">
                                <img src="${item.img}">
                            </div>
                            <div class="c-slide-project__body">
                                <div class="c-slide-project__title">
                                    <h3>${item.title}</h3>
                                </div>
                                <div class="c-slide-project__description">
                                    <p>${item.description}</p>
                                </div>
                                <div class="c-slide-project__links">
                                    <a class="c-slide-project__button" target="blank" href="${item.repo}">Ir al repositorio</a>
                                </div>
                            </div>
                        </div>
                    ` ).join('')}
                    
                   
        
                </div>
            </div>
        </div>
    `;

    return view;
}

export default experiments;