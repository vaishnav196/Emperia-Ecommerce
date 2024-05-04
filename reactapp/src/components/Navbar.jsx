import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const getdata = useSelector((state) => state.cartreducer.carts);
 

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container upp">
          <div>
            <Link className="navbar-brand " to="/">
              <img
                src="images/logo_img.png"
                alt=""
                height="80px"
                width="160px"
              />
            </Link>
          </div>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-3 mx-auto">
              <ul className="navbar-nav ">
                <li className="nav-item px-2 py-1  fw-semibold item-list">
                  <Link className="nav-link  px-3 " to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown  px-1 py-1 fw-semibold">
                  <Link
                    className="nav-link dropdown-toggle  px-3 px-lg-2 "
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </Link>

                  <ul className="dropdown-menu p-0 dropdown-content">
                    <li className="p-0">
                      <Link className="dropdown-item" to="history">
                        History
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <Link className="dropdown-item" to="leadership">
                        Leadership
                      </Link>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <Link className="dropdown-item" to="corevalue">
                        Core Values
                      </Link>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="distribution">
                        Distribution
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown  px-1 py-1 fw-semibold ">
                  <Link
                    className="nav-link dropdown-toggle px-3 px-lg-2"
                    to="products"
                    data-bs-toggle="dropdown tab"
                  >
                    Products
                  </Link>
                  <ul className="dropdown-menu dropdown-content p-0">
                    <li>
                      <Link className="dropdown-item" to="personalcare">
                        Personal Care
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="bathroomcare">
                        Bathroom Care
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="floorcare">
                        Floor & Surface Care
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="generalcare">
                        General Care
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="kitchencare">
                        Kitchen Care
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item px-1 py-1  fw-semibold item-list">
                  <Link
                    to="inovation"
                    data-toggle="tab"
                    className="nav-link px-3 px-lg-2"
                  >
                    Inovation & Technology
                  </Link>
                </li>

                <li className="nav-item dropdown px-1  py-1 fw-semibold ">
                  <Link
                    className="nav-link dropdown-toggle px-3 px-lg-2"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="services"
                  >
                    Media
                  </Link>

                  <ul className="dropdown-menu dropdown-content p-0 ">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="https://www.facebook.com/"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="https://www.instagram.com/"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="https://in.linkedin.com/"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="https://twitter.com/">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="https://youtube.com/">
                        Youtube
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item px-lg-4 ">
                  <Link
                    to="contactus"
                    className="nav-link py-2 px-3 px-lg-2 border-0"
                  >
                    <button
                      type="button"
                      id="button"
                      className="btn btn-md px-3 py-2 py-lg-1 rounded-pill text-uppercase fw-semibold"
                    >
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/cart" type="button" className="btn  position-relative">
            <i className="fa-solid fa-cart-shopping cart "></i>
            <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-info">
              {getdata.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
