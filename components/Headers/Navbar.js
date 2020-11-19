import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-2">
      <a className="navbar-brand" href="#">
        <Image src="/static/logo.png" width={250} height={50} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Analytics</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/coinmap">
              <a className="nav-link">Coinmap</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/richlist">
              <a className="nav-link">RichList</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/stores_and_apis">
              <a className="nav-link">Stores and APIs</a>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm"
            type="search"
            placeholder="Search"
            style={{ borderRadius: "25px"}}
          />
        </form>
      </div>
    </nav>
  );
}
