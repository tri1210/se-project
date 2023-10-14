import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar className="p-0" bg="none" expand="lg">
          <Link className="navbar-brand" href="/">
            <h2 className="logo">Reala.</h2>
          </Link>
          <Navbar.Toggle
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="togler-icon-inner">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/all-property">
                  All Property
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar__right d-block d-lg-none">
              <li className="nav-item">
                <Link className="nav-link" href="mailto:admin@gmail.com">
                  <MdOutlineMailOutline /> admin@gmail.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="tel:0123456789">
                  <MdCall /> 0123456789
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>

          <ul className="navbar-nav navbar__right d-none d-lg-flex gap-2">
            <li className="nav-item">
              <Link
                className="nav-link d-flex gap-2 align-items-center"
                href="mailto:admin@gmail.com"
              >
                <MdOutlineMailOutline /> admin@gmail.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex gap-2 align-items-center"
                href="tel:0123456789"
              >
                <MdCall /> 0123456789
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
