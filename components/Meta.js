import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "SpaceX Fleet Ships",
};

export default Meta;
