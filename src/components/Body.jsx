import '../style/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiImagen from '../assets/FOTO-ALAN-ALEXIS-NIETO.jpg'

const Body = () => {
    return(
    <>
    {/*seccion: about me */}
            <div class="d-flex " id='AboutMe'>
                <div class="" id="foto">
                    <img src={MiImagen} class="rounded float-start rounded-circle" alt="Alan Nieto" width="360"></img>
                </div>
                <div class="text-center" id="texto">
                    <h2>Sobre Mi</h2>
                    <p class="text-center fst-italic pt-3">My name is Hashir Shoaib.
                    I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering.
                    I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.
                    In my free time I like working on open source projects.</p>
                    <div class="d-flex justify-content-center mt-5">
                        <a href="#cv">
                            <button type="button" class="btn btn-outline-dark btn-lg">Curriculum Vitae</button>
                        </a>
                    </div>
                </div>
            </div>
    {/*seccion: projects*/}
    <h1>projectss</h1>
    {/*seccion: skills */}
    
    </>
    );
};



export default Body;