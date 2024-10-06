import Image from "next/image";
import '../header/Header.scss'

export function Header(){
  return(
    <div className="header">  
      <div>
        <h1>Olá, eu sou Gustavo! 👋</h1>
        <h2>Estudante de Dados</h2>
      </div>
      <div>
      <Image
        src="/Perfil.jpeg"
        alt="minha foto"
        width={300}
        height={300}
        priority
      />
      </div>
      
    </div>
  )
}