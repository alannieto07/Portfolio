import { Typewriter } from "react-simple-typewriter";

const TextoAnimado = () => {
    return(
    <p className="text-3xl text center">
    <Typewriter
    words={["Apasionado en cambiar el mundo con tecnología."]}
    loop={false}
    cursor
    cursorStyle="_"
    typeSpeed={70}
    />
    </p>
    );
};

export default TextoAnimado;