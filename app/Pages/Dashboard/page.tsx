// import { cards } from "../lib/data";
import Card from "../ui/Dashboard/cards/cards";
import Chart from "../ui/Dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/Dashboard/rightBar/rightBar";
import Table from "../ui/Dashboard/Table/Table";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {Card.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
          <Card />
          <Card />
          <Card />
        </div>
        <Table />
        {/* <Chart /> */}
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
