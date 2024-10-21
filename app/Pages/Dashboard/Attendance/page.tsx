// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "../../ui/MyAttendance/attendance.module.css";
import Image from "next/image";
import Table from "../../ui/Dashboard/Table/Table";

const MyAttendance = () => {
  // const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={"/noavatar.png"} alt="" fill />
          </div>
          John Doe
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <label>Username</label>
            <input type="text" name="username" placeholder="John Doe" />
            <label>Email</label>
            <input type="email" name="email" placeholder="john@gmail.com" />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="9999999999" />
            <label>Address</label>
            <textarea name="address" placeholder="India" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {/* <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select> */}
            <button>Update</button>
          </form>
        </div>
      </div>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
};

export default MyAttendance;
