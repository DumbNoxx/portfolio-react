import inicio from "../assets/styles/Profile.module.css";
import github from "../assets/images/svg/github.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import email from "../assets/images/svg/mail.svg";
import dylan from "../assets/images/dylan.jpeg";
import arrow from "../assets/images/svg/arrow-right.svg";
import TypingEffect from "../hooks/TypingEffect";

export const Profile = () => {
  return (
    <>
      <div className={inicio["responsive-web"]}>
        <div>
          <div className={inicio.badged}>Disponible para proyectos</div>
        </div>
        <div>
          <TypingEffect />
          <p className={inicio.Desp1}>Desarrollador Web & Diseñador PixelArt</p>
          <p className={inicio.Desp2}>
            Creo experiencias digitales atractivas y funcionales para la web
            moderna.
          </p>
          <div>
            <a href="#" className={inicio.VerProyectos}>
              Ver proyectos
              <img src={arrow} alt="flecha" />
            </a>
            <a href="#" className={inicio.ContactoProfile}>
              Contacto
            </a>
          </div>
          <div className={inicio.back}>
            <a href="https://github.com/DumbNoxx" target="_blank">
              <img src={github} alt="github" className={inicio.githubProfile} />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-marcano-994205266"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className={inicio.linkedinProfile}
              />
            </a>
            <a href="#">
              <img src={email} alt="email" className={inicio.emailProfile} />
            </a>
          </div>
          <div className={inicio.Dylan}>
            <img src={dylan} alt="dylan" className={inicio.dylan} />
          </div>
        </div>
        <div className={inicio.separador}></div>
      </div>
    </>
  );
};
