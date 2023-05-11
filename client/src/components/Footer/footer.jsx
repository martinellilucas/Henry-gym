import react from "react"
import Style from "./App.module.css"
import { FaInstagram} from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  	const imageUrl = 'https://cdn.discordapp.com/attachments/1105187840230441004/1105887915847983204/logo.jpeg.png' 

  return (
    <div className={Style.contenedor}>
      	<div className ={Style.footer}>
          <div className={Style.logo}>
            <img src={imageUrl} className={Style.imageLogo} alt="Descripcion de la imagen"/>
          </div>
          <div className={Style.about}>
            <Link className= {Style.about} to='/about'>Sobre nosotros</Link>
          </div>
          <div className={Style.igywhat}>
            <a href='https://www.instagram.com/agus_purici/' target="_blank"><p className={Style.ig}><FaInstagram/></p></a>
            <a href='"whatsapp://send?phone=NUMERO&text=Hola%20quiero%20contactar%20contigo"' target="_blank"><p className= {Style.Whatsapp}><FaWhatsapp/></p></a>
          </div>
            <div className={Style.horario}>
              <h3 className={Style.hora}> Horairo de atencion</h3>
              <p className={Style.hora}> Lunes a viernes 6:30hs a 22:30hs </p>
              <p className={Style.hora}> Sabado 9hs a 12hs </p>
            </div>         
        </div>
    </div>
  )
}

export default Footer;