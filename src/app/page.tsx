import { Header } from "@/components/header/Header";
import'../styles/home.scss'
import { Experience } from "@/components/experience/Experience";

export default function Home() {
  return (
      <main className="container">
        <Header/>
        <Experience/>
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
