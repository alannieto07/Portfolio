import '../style/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiImagen from '../assets/FOTO-ALAN-ALEXIS-NIETO.jpg'

const Body = () => {
    return(
    <>
    {/*seccion: about me */}
            <div class="container pt-5 pb-5 mb-5 pl-4 mt-3"  id="AboutMe">
                <div class="row ">
                    <div class="col" id="foto">
                        <img src={MiImagen} class="rounded float-start rounded-circle" alt="Alan Nieto" width="380"></img>
                    </div>
                    <div class="text-center col " id="texto">
                        <h2 >Sobre Mi</h2>
                        <p class="text-center text-secondary pt-3 ">Mi nombre es Alan Nieto.
                            I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering.
                            I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.
                            In my free time I like working on open source projects.</p>
                        <a href="#cv" class="mt-4">
                            <button type="button" class="btn btn-outline-dark btn-lg mt-3">Curriculum Vitae</button>
                        </a>
                    </div>
                </div>
            </div>

            <hr class="featurette-divider"></hr>


    {/*seccion: projects*/}
    <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <a>
                            <div class="card">
                                <div class="card-body">
                                        <h5 class="card-title">Conf Bs As</h5>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        {/*Lenguajes*/}
                                        {/*Ult modificación*/}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a>
                            <div class="card">
                                <div class="card-body">
                                        <h5 class="card-title">Conf Bs As</h5>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        {/*Lenguajes*/}
                                        {/*Ult modificación*/}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a>
                            <div class="card">
                                <div class="card-body">
                                        <h5 class="card-title">Conf Bs As</h5>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        {/*Lenguajes*/}
                                        {/*Ult modificación*/}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a>
                            <div class="card">
                                <div class="card-body">
                                        <h5 class="card-title">Conf Bs As</h5>
                                        <p class="card-text">Landing Page para la ciudad de Buenos Aires.</p>
                                        {/*boton*/}
                                        {/*Lenguajes*/}
                                        {/*Ult modificación*/}
                                    </div>
                            </div>
                        </a>
                    </div>
    </div>
    
    {/*seccion: skills */}
    <h1>skills</h1>
    </>
    )
}



export default Body;