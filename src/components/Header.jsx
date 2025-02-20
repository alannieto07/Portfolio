import '../style/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="white">
            <div class="container-fluid">
                    <a class="navbar-brand mb-0 ml-4  mt-2 fs-3" href="#home" id="alan">&lt;Alan/&gt;</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link h2 mt-3 ml-4 mr-4 fs-5" href="#Proyectos">Proyectos</a>
                            <a class="nav-link h2 mt-3 ml-4 mr-4 fs-5" href="#Cv">CV</a>
                            <a class="nav-link h2 mt-3 ml-4 mr-4 fs-5" href="#AboutMe">Sobre Mi</a>
                            <a class="nav-link h2 mt-3 ml-4 mr-4 fs-5" href="#Skills">Skills</a>
                        </div>
                    </div>
            </div>
        </nav>
    </>
    )
}

export default Header;