import "./Information.scss"
import { SectionTitle } from "../SectionTitle/Title"

export function Information(){
  return(
    <div className="Info">
        <SectionTitle text="Línguas"/>
        <div className="languages-info">
          <span>Inglês - Avançado</span>
          <span>Espanhol - Básico</span>
          <span>Português - Lingua Nativa</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="education-info">
          <span>Sistemas para Internet - Presente</span> <br /><br />
          <span>Análise e Desenvolvimento de Sitemas - 2023 - 2024</span>
        </div>
    </div>
  )
}