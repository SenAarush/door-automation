import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/styles/DashboardCard.module.css";

interface CardProps {
  title: string;
  number: number;
  details: string;
  positive: string;
}

const Card: React.FC<CardProps> = ({ title, number, details, positive }) => {
  return (
    <div className="w-full border border-white">
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number.toLocaleString()}</span>
        <span className={styles.details}>
          <span className={styles.positive}>{positive}</span> {details}
        </span>
      </div>
    </div>
  );
};

export default Card;
