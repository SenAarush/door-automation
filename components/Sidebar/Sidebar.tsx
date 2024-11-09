import styles from "@/styles/Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { MdDashboard, MdGroup, MdLogout } from "react-icons/md";

interface User {
  img: string;
  username: string;
}

const user: User = {
  img: "/noavatar.png",
  username: "John Doe",
};

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    path: "/Pages/Dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "My Attendance",
    path: "/Pages/Dashboard/Attendance",
    icon: <MdGroup />,
  },
];

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  return (
    <Link href={item.path} className={styles.menuLink}>
      {item.icon}
      <span>{item.title}</span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img}
          alt="User Avatar"
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <MenuLink item={item} />
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
}
