import { GitIcon } from "../icons/github";
import { InstaIcon } from "../icons/insta";
import { KaggleIcon } from "../icons/kaggle";
import { LinkedinIcon } from "../icons/linkedin";
import "./Social.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <InstaIcon />
      </a>
      <a href="">
        <LinkedinIcon />
      </a>
      <a href="">
        <GitIcon />
      </a>
      <a href="">
        <KaggleIcon />
      </a>
    </div>
  );
}
