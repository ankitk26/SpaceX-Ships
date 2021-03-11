import classnames from "classnames";
import Link from "next/link";
import styles from "../styles/Home.module.css";

let cn = classnames.bind(styles);

const ShipItem = ({ ship }) => {
  return (
    <div className={styles.ship}>
      <Link href={`/ship/${ship.id}`}>
        <a>{ship.name}</a>
      </Link>
      <div className={styles.ship_tags}>
        <span className={`${styles.ship_status} ${ship.active ? styles.active : styles.inactive}`}>
          {ship.active ? "Active" : "Inactive"}
        </span>
        <span className={`${styles.ship_status} ${styles.type}`}>{ship.type}</span>
      </div>
    </div>
  );
};

export default ShipItem;
