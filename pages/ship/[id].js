import Image from "next/image";
import Meta from "../../components/Meta";
import styles from "../../styles/ShipDetails.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/ships");
  const data = await res.json();

  const paths = data.map(({ id }) => ({
    params: { id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://api.spacexdata.com/v4/ships/${params.id}`);
  const ship = await res.json();

  return { props: { ship } };
};

const ShipDetails = ({ ship }) => {
  return (
    <>
      <Meta title={`Ships | ${ship.name}`} />

      <section className={styles.ship_info}>
        <h3>{ship.name}</h3>
        {ship.image ? (
          <div className={styles.ship_image}>
            <Image src={ship.image} layout="fill" objectFit="contain" alt={ship.name + " image"} />
          </div>
        ) : (
          <p className={styles.no_image_alert}>Image unavailabe</p>
        )}

        <div className={styles.ship_more}>
          <span>Type: {ship.type}</span>
          <section className={styles.ship_roles_section}>
            Roles:
            <div className={styles.ship_roles}>
              {ship.roles.map((role, index) => (
                <span key={index} className={styles.ship_role}>
                  {role}
                </span>
              ))}
            </div>
          </section>
          {ship.mass_kg && (
            <span>
              Weight: {ship.mass_kg} kg ({ship.mass_lbs} lbs)
            </span>
          )}
          {ship.year_built && <span>Built in {ship.year_built}</span>}
          <span>Home port: {ship.home_port}</span>
          <div>
            Currently{" "}
            <span style={{ color: "#005288", fontWeight: "bold" }}>{ship.active ? "active" : "inactive"}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipDetails;
