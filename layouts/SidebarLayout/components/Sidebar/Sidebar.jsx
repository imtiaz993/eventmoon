import classNames from "classnames/bind";
import { useRouter } from "next/router";

// styles
import styles from "./Sidebar.module.scss";

// components
import { Logo, Accordion } from "components";
import Link from "next/link";

// assets
import { FaHome, FaChartBar, FaBlog, FaList, FaPen } from "react-icons/fa";

const cx = classNames.bind(styles);

const routes = [
  { href: "", name: "Dashboard", icon: <FaHome /> },
  { href: "/analytics", name: "Analytics", icon: <FaChartBar /> },
  {
    href: "/blogs",
    name: "Blogs",
    icon: <FaBlog />,
    children: [
      { href: "/posts", name: "Posts" },
      { href: "/create", name: "Create" },
    ],
  },
];

const Sidebar = ({ shown }) => {
  const router = useRouter();

  return (
    <aside className={cx("sidebar-root", { shown: shown })}>
      <Logo wrapperClass={cx("logo")} />

      <ul className={cx("nav-list")}>
        {routes.map(({ href, name, icon, children }, i) => {
          if (!children) {
            return (
              <li key={i}>
                <Link href={"/dashboard" + href}>
                  <a
                    className={cx({
                      active: router.asPath === "/dashboard" + href,
                    })}
                  >
                    <span className={cx("icon")}>{icon}</span>
                    <span className={cx("name")}>{name}</span>
                  </a>
                </Link>
              </li>
            );
          }

          return (
            <li key={i}>
              <Accordion
                header={
                  <a
                    className={cx({
                      active: router.asPath.startsWith("/dashboard" + href),
                    })}
                  >
                    <span className={cx("icon")}>{icon}</span>
                    <span className={cx("name")}>{name}</span>
                  </a>
                }
              >
                <ul>
                  {children.map(({ href: _href, name, icon }, i) => (
                    <li className={cx("child")} key={i}>
                      <Link href={"/dashboard" + href + _href}>
                        <a
                          className={cx({
                            active:
                              router.asPath === "/dashboard" + href + _href,
                          })}
                        >
                          <span className={cx("name")}>{name}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
