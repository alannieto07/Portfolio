import '../style/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiImagen from '../assets/FOTO-ALAN-ALEXIS-NIETO.jpg'

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
        <h1 class="text-dark mb-5">Proyectos Recientes</h1>
            <div class="row row-cols-md-2 row-cols-1  g-4 justify-content-md-center" >
            <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                        <h4 class="card-title">Conf Bs As</h4>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        <a href="https://github.com/tu-usuario" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                            <i class="bi bi-github"></i> Repo
                                        </a>
                                        <hr></hr>
                                        {/*Lenguajes*/}
                                        <p class="card-text">Technologies:.</p>
                                        {/*Ult modificación*/}
                                        <p class="card-text">Last Update:.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                        <h4 class="card-title">Conf Bs As</h4>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        <a href="https://github.com/tu-usuario" target="_blank" class="btn btn-outline-secondary  btn-lg mt-2 ">
                                            <i class="bi bi-github"></i> Repo
                                        </a>
                                        <hr></hr>
                                        {/*Lenguajes*/}
                                        <p class="card-text">Technologies:.</p>
                                        {/*Ult modificación*/}
                                        <p class="card-text">Last Update:.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card  shadow-lg" id="cards">
                                <div class="card-body">
                                        <h4 class="card-title">Conf Bs As</h4>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        <a href="https://github.com/tu-usuario" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                            <i class="bi bi-github"></i> Repo
                                        </a>
                                        <hr></hr>
                                        {/*Lenguajes*/}
                                        <p class="card-text">Technologies:.</p>
                                        {/*Ult modificación*/}
                                        <p class="card-text text-secondary ">Last Update:.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-5" >
                        <a>
                            <div class="card shadow-lg " id="cards">
                                <div class="card-body">
                                        <h4 class="card-title">Conf Bs As</h4>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        <a href="https://github.com/tu-usuario" target="_blank" class="btn btn-outline-secondary btn-lg mt-2 ">
                                            <i class="bi bi-github"></i> Repo
                                        </a>
                                        <hr></hr>
                                        {/*Lenguajes*/}
                                        <p class="card-text">Technologies:.</p>
                                        {/*Ult modificación*/}
                                        <p class="card-text">Last Update:.</p>
                                    </div>
                            </div>
                        </a>
                    </div>
        </div>
</div>  
    {/*seccion: skills */}
    <div id="Skills">
    <h1>skills</h1>
    </div>
    </>
    )
}



export default Body;