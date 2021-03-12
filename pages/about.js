import Link from "next/link";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta title="About" />
      <span>This site uses SPACEX API to fetch the ships in SPACEX fleet</span>
      <br />
      <Link href="https://github.com/ankitk26/SpaceX-Ships" passHref={true}>
        <a target="_blank" rel="noreferrer">
          Github repo
        </a>
      </Link>
      <style jsx>
        {`
          span {
            font-size: 1.5rem;
          }
          a {
            font-size: 1.2rem;
            color: #005288;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default About;
