import Meta from "../components/Meta";
import Ships from "../components/Ships";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/ships");
  const ships = await res.json();

  return { props: { ships } };
};

export default function Home({ ships }) {
  return (
    <>
      <Meta title="SpaceX Fleet Ships" />
      <h1 className={styles.heading}>SPACEX FLEET SHIPS</h1>
      <Ships ships={ships} />
    </>
  );
}
