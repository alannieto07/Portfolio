import '../style/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiImagen from '../assets/FOTO-ALAN-ALEXIS-NIETO.jpg'


const RepoUno= "https://github.com/alannieto07/Portfolio/archive/refs/heads/main.zip"
const RepoDos="https://github.com/alannieto07/TPIntegrador/archive/refs/heads/main.zip"
const RepoTres="https://github.com/alannieto07/api1/archive/refs/heads/main.zip"
const RepoCuatro="https://github.com/alannieto07/Biblioteca/archive/refs/heads/main.zip"
  
const Body = () => {
    return(
    <>
    {/*seccion: about me */}
            <div class="container-fluid pl-4 "  id="AboutMe">
                <div class="row ">
                    <div class="col" id="foto">
                        <img src={MiImagen} class="rounded float-start rounded-circle d-sm-block imagenoculta" id="fot" alt="Alan Nieto" width="380"></img>
                    </div>
                    <div class="text-center col " id="texto">
                        <h1 class="text-light  " >Sobre Mi</h1>
                        <p class="text-center text-light pt-3 ">Mi nombre es Alan Nieto.
                            I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering.
                            I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.
                            In my free time I like working on open source projects.</p>
                        <a href="#cv" class="mt-4">
                            <button type="button" class="btn btn-outline-light btn-lg mt-3">Curriculum Vitae</button>
                        </a>
                    </div>
                </div>
            </div>

            


    {/*seccion: projects*/}
            <div class="container-fluid  text-start " id="Proyectos">
                <h1 class="text-dark text-center mb-5">Proyectos Recientes</h1>
                <div class="row row-cols-md-2 row-cols-1  g-4 justify-content-md-center" >
                    <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                    <h4 class="card-title  fs-2">Portfolio</h4>
                                    <p class="">Personal web/Portfolio realizado por Alan Nieto. Construido usando React & Bootstrap.</p>
                                    {/*boton*/}
                                    <a href="https://github.com/alannieto07/Portfolio.git" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Repo
                                    </a>
                                    <a href="https://github.com/alannieto07/Portfolio/archive/refs/heads/main.zip" download={RepoUno} class="btn btn-outline-secondary btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Clone repo
                                    </a>
                                    <hr></hr>
                                    {/*Lenguajes*/}
                                    <div class="d-flex align-self-center ">
                                        <p class="card-text rounded ">Languages:</p><p className='card-text rounded'> Javascript:82,8%</p><p className='card-text rounded'>css:9,2%</p><p className='card-text rounded align-self-start '>html:8,0%</p>
                                    </div>
                                    {/*Ult modificación*/}
                                    <p class="mt-2 text-secondary">Update on March 18,2025</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                    <h4 class="card-title fs-2">Cien o escalera</h4>
                                    <p class="">Juego "cien o escalera" realizado como trabajo práctico para la facultad hecho con c++.</p>
                                    {/*boton*/}
                                    <a href="https://github.com/alannieto07/TPIntegrador.git" target="_blank" class="btn btn-outline-secondary  btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Repo
                                    </a>
                                    <a href="https://github.com/alannieto07/TPIntegrador/archive/refs/heads/main.zip" download={RepoDos} class="btn btn-outline-secondary  btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Clone Repo
                                    </a>
                                    <hr></hr>
                                    {/*Lenguajes*/}
                                    <div className='d-flex '>
                                        <p className="card-text rounded">Languages: </p><p className='card-text rounded align-self-start '> c++ 100.0%</p>
                                    </div>
                                    {/*Ult modificación*/}
                                    <p class="mt-2 text-secondary">Update on November 27,2024</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                    <h4 class="card-title fs-2">Usuarios</h4>
                                    <p class="">Api REST para usuarios hecho con nodejs, express, sequelize & mysql.</p>
                                    {/*boton*/}
                                    <a href="https://github.com/alannieto07/api1.git" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Repo
                                    </a>
                                    <a href="https://github.com/alannieto07/api1/archive/refs/heads/main.zip" download={RepoTres} class="btn btn-outline-secondary  btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Clone Repo
                                    </a>
                                    <hr></hr>
                                    {/*Lenguajes*/}
                                    <div className='d-flex'>
                                        <p class="card-text rounded">Languages:</p> <p className='card-text rounded align-self-start '>javascript:100,0%</p>
                                    </div>
                                    {/*Ult modificación*/}
                                    <p class=" mt-2 text-secondary ">Update on february 20,2025 </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card shadow-lg " id="cards">
                                <div class="card-body">
                                    <h4 class="card-title fs-2">Biblioteca</h4>
                                    <p class="">API Rest para gestión de libros hecho con java & springboot.</p>
                                    {/*boton*/}
                                    <a href="https://github.com/alannieto07/Biblioteca.git" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Repo
                                    </a>
                                    <a href="https://github.com/alannieto07/Biblioteca/archive/refs/heads/main.zip" download={RepoCuatro} class="btn btn-outline-secondary  btn-lg mt-2 ">
                                        <i class="bi bi-github"></i> Clone Repo
                                    </a>
                                    <hr></hr>
                                    {/*Lenguajes*/}
                                    <div className='d-flex'>
                                        <p class="card-text rounded">Languages: </p> <p className='card-text rounded'>HTML:62,2% </p><p className='card-text rounded'>java:36,2%</p><p className='card-text rounded align-self-start '>css:0.9%</p>
                                    </div>
                                    {/*Ult modificación*/}
                                    <p class="mt-2 text-secondary">Update on July 8,2023</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>  
    
    {/*seccion: skills */}
            <div id="Skills" className='text-center'>
                <h1>skills</h1>
            </div>
        </>
    )
}



export default Body;