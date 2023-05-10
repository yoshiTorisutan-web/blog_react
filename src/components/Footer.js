import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0b1e30",
    fontFamily: "SourceCodePro",
  };

  return (
    <MDBFooter className="text-center" style={footerStyle} color="white">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ marginTop: "5px" }}
            />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Recevoir notre newsletter ?</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Adresse mail"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  S'abonner
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Bienvenue sur notre blog ! Nous sommes ravis que vous soyez ici et
            nous espérons que vous apprécierez notre contenu.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="7" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">A propos</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    L'équipe
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Plan du site
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    CGU
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">blog_react.net</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    49000 ANGERS
                  </a>
                </li>
                <li>
                  <p href="#!" className="text-white">
                    05 64 52 76 23
                  </p>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    trileo@blog_react.net
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Copyright © 2023 blog_react
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; 2023 Mon Blog. Tous droits réservés.
      </div>
    </MDBFooter>
  );
};

export default Footer;
