import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { MdDashboard, MdGroup, MdLogout } from "react-icons/md";

const user = {
  img: "/noavatar.png",
  username: "John Doe",
};

const menuItems = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/Pages/Dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Attendance",
        path: "/Pages/Dashboard/Attendance",
        icon: <MdGroup />,
      },
    ],
  },
];

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.menuLink}>
      {item.icon}
      <span>{item.title}</span> {/* Add back the text span */}
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt="User Avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.menuList}>
        {menuItems[0].list.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <MenuLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}