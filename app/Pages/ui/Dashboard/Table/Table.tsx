import Image from "next/image";
import styles from "./table.module.css";

const Table = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Attendances</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            {/* <td>User</td> */}
            <td>Status</td>
            <td>Date</td>
            <td>Entry Time</td>
            <td>Exit Time</td>
            <td>User Type</td>
            <td>Dummy</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Inactive
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Inactive
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Active
              </span>
            </td>
            <td>14.02.2024</td>
            <td>23:00:45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
