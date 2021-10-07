import { PlusCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import Search from "@/components/Search";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/ ">
            DjEvents
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link aria-current="page" href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/events">
                  <a className="nav-link">Events</a>
                </Link>
              </li>
              {user ? (
                <>
                  {/* after logged in */}
                  <li className="nav-item">
                    <Link href="/events/add">
                      <a className="nav-link">Add Events</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href='/account/dashboard'>
                    <a className="nav-link">Dashboard</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => logout()}
                      className='btn btn-secondary'
                    >
                      <LogoutOutlined /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* after logged out */}
                  <li className="nav-item">
                    <Link href="/account/login">
                      <a className="nav-link">
                        <PlusCircleOutlined
                          style={{ verticalAlign: "-0.027em", color: "white" }}
                        />
                        &nbsp;&nbsp;Login
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/account/register">
                      <a className="nav-link">
                        <PlusCircleOutlined
                          style={{ verticalAlign: "-0.027em", color: "white" }}
                        />
                        &nbsp;&nbsp;Register
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
