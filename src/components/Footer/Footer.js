import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer className="page-footer footer-light bg-light font-small special-color-dark pt-4">
            <div className="text-center">
              © 2020 Copyright:
              <a href="http://www.github.com/captainstorm21">
                CaptainStorm21
              </a>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
