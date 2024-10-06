import { SectionTitle } from "../SectionTitle/Title"
import "../experience/Experience.scss"
import { Skill } from "../skill/Skill";

export function Experience(){
  return(
    <div className="experience">
      <SectionTitle text="Experiência"/>
      <p>Trabalhei em uma loja virtual de variados produtos, sendo criado e gerenciado por mim mesmo. Também já fiz edição de vídeo e tráfego pago. Atualmente, faço estágio na Abô cafeteria e botânica em João Pessoa, além disso, aprofundando conhecimentos em dados e nuvem.</p>
      <div className="experience-time">
        <Skill image="/Python.png" measure={3} years="Avançado"/>
        <Skill image="/ts.png" measure={2} years="intermediário"/>
        <Skill image="/sql.png" measure={2} years="intermediário"/>
        <Skill image="/java.png" measure={1} years="Básico"/>
        <Skill image="/react.png" measure={2} years="intermediário"/>
      </div>
    </div>
  )
}