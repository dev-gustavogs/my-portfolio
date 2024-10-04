import Image from "next/image";

export default function Home() {
  return (
      <main >
        <div className="header">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> 
        </div>
        <div>
          <h1>Olá, Me chamo Gustavo!</h1>
          <h2>Estudante de Dados</h2>
        </div>
        <div className="experience">
          <h3>Experiência</h3>
          <p>Na área acadêmica, fiz 2 semestres de Química no Instituto Federal da Paraíba (IFPB), 3 semestre de Análise e Desenvolvimento de Sistemas (Uninassau) e atualmente cursando Sistemas para Internet na faculdade Uniesp. Trabalhei em uma loja virtual de variados produtos, sendo criado e gerenciado por mim mesmo. Também já fiz edição de vídeo e tráfego pago. Atualmente, estou no quarto período do curso e faço estágio na Abô cafeteria e botânica em João Pessoa, além disso, aprofundando conhecimentos em dados e nuvem.</p>
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
