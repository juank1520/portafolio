import galileo_logo from '../assets/imgs/galileo_logo.jpeg';
import html_logo from '../assets/imgs/html.svg';
import css_logo from '../assets/imgs/css.svg';
import sass_logo from '../assets/imgs/sass.svg';
import angular_logo from '../assets/imgs/angular.svg';
import javaScript_logo from '../assets/imgs/JavaScript.svg';
import webpack_logo from '../assets/imgs/webpack.svg';
import php_logo from '../assets/imgs/php.svg';
import laravel_logo from '../assets/imgs/laravel.svg';
import node_logo from '../assets/imgs/nodejs.svg';
import mySql_logo from '../assets/imgs/MySQL.svg';
import sqlServer_logo from '../assets/imgs/sql-server.svg';





const studies = [
    {
        img: galileo_logo,
        alt: 'universidad galileo',
        title: 'Ingeniería en Mecatrónica',
        date: 'Enero 2011 - Diciembre 2015',
        description: 'Estudié ingeniería en mecatrónica en la universidad galileo desde el 2012 hasta el 2015. Actualmente cuento con el cierre de pensum.'
    },
    {
        img: galileo_logo,
        alt: 'universidad galileo',
        title: 'Tuning de base de datos SQL Server',
        date: '18 - 29 de Noviembre del 2019',
        description: 'El curso fue impartido en la Universidad Galileo por un MVP. Fue un curso presencial, teórico y práctico de dos semanas en dónde se abrodaron temas de optimización de tiempos de respuesta, análisis de rendimiento, diseño y estructura.'
    },
    {
        img: galileo_logo,
        alt: 'universidad galileo',
        title: 'Maestría en Business Inteligece and Analitics',
        date: 'Enero del 2020 - Actualmente',
        description: 'Actualmente estoy estudiando en la Universidad Galileo una maestría en inteligencia de negocios y analítica.'
    }
];

const frontEnd = [
    {
        img: html_logo,
        title: 'HTML',
        description: 'Avanzada',
    },
    {
        img: css_logo,
        title: 'CSS',
        description: 'Avanzada',
    },
    {
        img: sass_logo,
        title: 'Sass',
        description: 'Avanzada',
    },
    {
        img: angular_logo,
        title: 'Angular',
        description: 'Avanzada',
    },
    {
        img: javaScript_logo,
        title: 'JavaScript',
        description: 'Avanzada',
    },
    {
        img: webpack_logo,
        title: 'Webpack',
        description: 'Intermedia',
    },
];

const backEnd = [
    {
        img: php_logo,
        title: 'PHP',
        description: 'Avanzada',
    },
    {
        img: laravel_logo,
        title: 'Laravel',
        description: 'Intermedia',
    },
    {
        img: node_logo,
        title: 'Node',
        description: 'Intermedia',
    },
];

const bbdd = [
    {
        img: mySql_logo,
        title: 'MySql',
        description: 'Intermedia',
    },
    {
        img: sqlServer_logo,
        title: 'SQL Server',
        description: 'Intermedia',
    },
]

const resume = () => {
    const view = `
        <div id="resumen" class="c-slide c-slide--two-colums">
            <div class="c-slide__colum">
                <div class="c-slide__title">
                    <h2 class="c-title">Estudios</h2>
                </div>
                <div class="c-slide__element">
                    ${studies.map( item => `

                        <div class="c-slide-school">
                            <div class="c-slide-school__image">
                                <img src="${item.img}" alt="${item.alt}">
                            </div>
                            <div class="c-slide-school__body">
                                <h3 class="c-slide-school__title">${item.title}</h3>
                                <p class="c-slide-school__date">${item.date}</p>
                                <p class="c-slide-school__description">${item.description}</p>
                            </div>
                        </div>
                    ` ).join('')}
               
                </div>
            </div>
        
            <div class="c-slide__colum">
                <div class="c-slide__title">
                    <h2 class="c-title">Tecnologías</h2>
                </div>
        
                <!--Front End-->
                <div class="c-slide__element">
                    <div class="c-slide-tech">
                        <div class="c-slide-tech__title">
                            <h3>Front End</h3>
                        </div>
        
                        <div class="c-slide-tech__images">
                        
                            ${frontEnd.map( item => `
                                <div class="c-slide-tech__element">
                                    <div class="c-round-image">
                                        <div class="c-round-image__img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <div class="c-round-image__body">
                                            <span class="c-round-image__title">
                                                ${item.title}
                                            </span>
                                            <p class="c-round-image__description">
                                                Experiencia: ${item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ` ).join('')}
   
                        </div>
        
        
                    </div>
                </div>
        
                <!--Back End-->
                <div class="c-slide__element">
                    <div class="c-slide-tech">
                        <div class="c-slide-tech__title">
                            <h3>Back End</h3>
                        </div>
        
                        <div class="c-slide-tech__images">
                            ${backEnd.map( item => `
                                <div class="c-slide-tech__element">
                                    <div class="c-round-image">
                                        <div class="c-round-image__img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <div class="c-round-image__body">
                                            <span class="c-round-image__title">
                                                ${item.title}
                                            </span>
                                            <p class="c-round-image__description">
                                                Experiencia: ${item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ` ).join('')}        
        
                        </div>
                    </div>
                </div>
        
                <!--DDBB-->
                <div class="c-slide__element">
                    <div class="c-slide-tech">
                        <div class="c-slide-tech__title">
                            <h3>DDBB</h3>
                        </div>
        
                        <div class="c-slide-tech__images">
                        
                            ${bbdd.map( item => `
                                <div class="c-slide-tech__element">
                                    <div class="c-round-image">
                                        <div class="c-round-image__img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <div class="c-round-image__body">
                                            <span class="c-round-image__title">
                                                ${item.title}
                                            </span>
                                            <p class="c-round-image__description">
                                                Experiencia: ${item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ` ).join('')}
       
                        </div>
                    </div>
                </div>
        
        
        
            </div>
        
        
        </div>
    `;

    return view;
}

export default resume;