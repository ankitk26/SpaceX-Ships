import Meta from "../components/Meta";

const about = () => {
  return (
    <>
      <Meta title="About" />

      <span>This site uses SPACEX API to fetch the ships in SPACEX fleet</span>
      <style jsx>
        {`
          div {
            width: 90%;
            text-align: center;
            margin: 0 auto;
            margin-top: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default about;
