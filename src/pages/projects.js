import plazaLogo from '../assets/imgs/plaza.jpg';
import bestEnergyLogo from '../assets/imgs/best-energy.jpg'
import juannioLogo from '../assets/imgs/juannio.jpg';

const projectsElements = [
    {
        title: 'Comparador de precios',
        description: `
            <p>Este proyecto consistió en agregar un módulo al backend de los reporteros de Plaza Pública para comparar precios entre empresas, sucursales, municipios, departamentos y países.</p>
            <p>Para el desarrollo de este proyecto utilicé HTML, CSS, JavaScript, MySQL y PHP. Un reto de este proyecto fue desarrollar sobre el backend que utilizaba el framework de Drupal.</p>
            `,
        img: plazaLogo,
        links: ['https://www.youtube.com/playlist?list=PLpq3GNbBSXQmkom91-M-qbuUfV-Rks7cP'],
    },
    {
        title: 'Visualizador',
        description: `
            <p>Es una herramienta interactiva para insertar en los artículos. Esta herramienta extrae la data del módulo comparador de precios, los ordena y los despliega en forma de tablas y gráficas Para este proyecto utilicé HTML, CSS, MySql, Google Maps y JavaScript con AJAX para hacer el visualizador asíncrono. Un reto de este proyecto fue el responsive.</p>
            `,
        img: plazaLogo,
        links: ['https://www.plazapublica.com.gt/content/el-supermercado-mas-caro-de-guatemala'],
    },
    {
        title: 'Auditor de Precios',
        description: `
            <p>Este proyecto es muy parecido al comparador de precios, con la diferencia que este no compara distintas empresas, en cambio compara los valor con los que se compraron productos, con los que se debieron de haber adquirido.</p>
            `,
        img: plazaLogo,
        links: [],
    },
    {
        title: 'Subastas de Juannio',
        description: `
            <p>Este proyecto es un sistema de subastas de arte, en dónde los participantes pueden pujar por sus obras favoritas</p>
            <p>Mi participación consistió en realizar modificaciones, solucionar incidencias, brindar soporte y migrar el servidor</p>
            <p>Este proyecto está desarrollado con python utilizando su famework Django y la base de datos es MySQL</p>
            `,
        img: juannioLogo,
        links: ['https://subasta.juannio.org/'],
    },
    {
        title: 'Página Web Best Energy',
        description: `
            <p>Es un página web informativa y además es un CMS para que nutricionistas puedan publicar entradas.</p>
            <p>El FrontEnd está desarrollado en Angular, renderiza desde el servidor para que los motores de búsqueda lo puedan indexar y el BackEnd está desarrollado en wordpress. El Frontend y el Backend se comunican con una API.</p>
            `,
        img: bestEnergyLogo,
        links: ['https://blog.juancarlos.ga/'],
    },
    {
        title: 'CRM',
        description: `
            <p>Este CRM cuenta con niveles de acceso y tiene las funcionalidades de: crear nuevos productos, agregar productos al inventario, crear clientes y clientes empresariales, generar descuentos a empresas, etc.</p>
            <p>El FrontEnd se desarrolló en Angular, para agilizar el desarrollo se utilizó la plantilla AdminLTE3 y el backend con PHP y Laravel.</p>
            `,
        img: bestEnergyLogo,
        links: ['https://crm.juancarlos.ga/'],
    }
];

const projects = () => {
    const view = `
        <div id="projects" class="c-slide c-slide--two-colums-elements">
            <div class="c-slide__colum">
                <div class="c-slide__title">
                    <h2 class="c-title">Proyectos</h2>
                    <span class="c-slide__description">Estos son algunos de los proyectos más importantes en los que he trabajado.</span>
                </div>
                <div class="c-slide__element">                       
                    ${projectsElements.map( item => `
                        <div class="c-slide-project">
                            <div class="c-slide-project__thumb-image">
                                <img src="${item.img}">
                            </div>
                            <div class="c-slide-project__body">
                                <div class="c-slide-project__title">
                                    <h3>${item.title}</h3>
                                </div>
                                <div class="c-slide-project__description">
                                    ${item.description}
                                </div>
                                <div class="c-slide-project__links">
                                    <a class="c-slide-project__button" target="blank" href="${item.links[0]}">Ir al proyecto</a>
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

export default projects;