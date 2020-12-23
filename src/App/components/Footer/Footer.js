import githubImage from "../../../images/github.svg";
import linkedInImage from "../../../images/linkedin.svg";
import twitterImage from "../../../images/twitter.svg";
import emailImage from "../../../images/email.svg";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ghostrib/" title="github">
        <img width={640} height={320} src={githubImage} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/mattbrannon1/" title="linkedin">
        <img width={640} height={320} src={linkedInImage} alt="Linked In" />
      </a>
      <a href="https://twitter.com/_mattbrannon" title="twitter">
        <img width={640} height={320} src={twitterImage} alt="Twitter" />
      </a>
      <a href="mailto:mattbrannon.dev@gmail.com" target="_top" title="email">
        <img width={640} height={320} src={emailImage} alt="Email" />
      </a>
    </footer>
  );
};

export default Footer;
