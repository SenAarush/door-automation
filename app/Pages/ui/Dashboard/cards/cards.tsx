// import { MdSupervisedUserCircle } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./cards.module.css";

// interface Item {
//   title: string;
//   number: number | string;
//   change: number;
// }

// const Card = ({ item }: { item: Item }) => {
//   return (
//     <div className={styles.container}>
//       <MdSupervisedUserCircle size={24} />
//       <div className={styles.texts}>
//         <span className={styles.title}>{item.title}</span>
//         <span className={styles.number}>{item.number}</span>
//         <span className={styles.detail}>
//           <span className={item.change > 0 ? styles.positive : styles.negative}>
//             {item.change}%
//           </span>{" "}
//           {item.change > 0 ? "more" : "less"} than previous week
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Card;

export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.details}>
          <span className={styles.positive}>12%</span> more than the previous
          week.
        </span>
      </div>
    </div>
  );
}
