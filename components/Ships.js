import styles from "../styles/Home.module.css";
import ShipItem from "./ShipItem";

const Ships = ({ ships }) => {
  return (
    <div className={styles.ships}>
      {ships.map((ship) => (
        <ShipItem key={ship.id} ship={ship} />
      ))}
    </div>
  );
};

export default Ships;
