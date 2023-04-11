import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center px-4">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <div className="logo mx-3"></div>
          </a>
          <span className="mb-3 mb-md-0 text-muted">Pet-Stays</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex px-5">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <img
                className="ficon ficon1"
                src="./images/instagram.png"
                alt=""
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <img className="ficon ficon2" src="./images/twitter.png" alt="" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <img
                className="ficon ficon3"
                src="./images/facebook.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
