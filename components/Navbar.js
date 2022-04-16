import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
        .active {
          color: red;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
