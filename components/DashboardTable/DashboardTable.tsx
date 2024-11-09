import Image from 'next/image';

import attendanceData from "@/data/mock/attendance.json";

import styles from '@/styles/DashboardTable.module.css';

const DashboardTable = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Attendances</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Entry Time</td>
            <td>Exit Time</td>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={data.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {data.name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    data.status === "Active" ? styles.pending : styles.cancelled
                  }`}
                >
                  {data.status}
                </span>
              </td>
              <td>{data.date}</td>
              <td>{data.entryTime}</td>
              <td>{data.exitTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
