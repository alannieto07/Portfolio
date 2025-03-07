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
    <div class="mt-5">
    <h1>projectss</h1>
    </div>
    {/*seccion: skills */}
    <h1>skills</h1>
    </>
    )
}



export default Body;