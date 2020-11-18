import Image from "next/image"

export default function Navbar() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
        <Image src="/static/celoimg.png"
        width={100}
        height={50}/>
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
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Analytics <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Coinmap
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            RichList
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Stores and APIs
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  </nav>);
}
