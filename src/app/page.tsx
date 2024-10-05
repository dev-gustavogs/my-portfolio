import { Header } from "@/components/header/Header";
import'../styles/home.scss'

export default function Home() {
  return (
      <main className="container">
        <Header/>
        <div className="experience">
          <h3>Experiência</h3>
          <p>Na área acadêmica, 3 semestre de Análise e Desenvolvimento de Sistemas (Uninassau) e atualmente cursando Sistemas para Internet na faculdade Uniesp. Trabalhei em uma loja virtual de variados produtos, sendo criado e gerenciado por mim mesmo. Também já fiz edição de vídeo e tráfego pago. Atualmente, estou no quarto período do curso e faço estágio na Abô cafeteria e botânica em João Pessoa, além disso, aprofundando conhecimentos em dados e nuvem.</p>
        </div>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Línguas</h3>
          <div className="languges-infos">
            <span>Inglês - Avançado</span>
            <span>Espanhol - Básico</span>
            <span>Português - Lingua Nativa</span>
          </div>
          <h3>Educação</h3>
          <div className="education-infos">
            <span></span>
            <span>Sistemas para Internet - Presente</span>
            <span>Análise e Desenvolvimento de Sitemas - 2023 - 2024</span>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>Contato</button>
          </div>
        </div>
      </main>
  );
}
