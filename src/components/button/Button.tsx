import "../button/Button.scss";
import { EmailIcon } from "../icons/Icons";
import "../social/Social";
import { SocialBtns } from "../social/Social";

export function Button() {
  return (
    <div className="buttons">
      <SocialBtns />
      <a href="mailto:gustavogomes.bsb68@gmail.com" className="btn-primary">
        Contato
        <EmailIcon />
      </a>
    </div>
  );
}
