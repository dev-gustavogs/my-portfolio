import { GitIcon } from "../icons/github";
import { InstaIcon } from "../icons/insta";
import { KaggleIcon } from "../icons/kaggle";
import { LinkedinIcon } from "../icons/linkedin";
import "./Social.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/gustavogs__/">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/gustavo-santos-b7a1a018b/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/dev-gustavogs">
        <GitIcon />
      </a>
      <a href="https://www.kaggle.com/gustavogss">
        <KaggleIcon />
      </a>
    </div>
  );
}
