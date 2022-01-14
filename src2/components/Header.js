import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export function Header({ title, description, image, app_access_link, googleplay_link, appStore_link, qr_code }) {
  return (
    <header style={{ backgroundImage: "background.png" }}>
      <Row className="d-flex justify-content-between w-100 align-items-xl-center align-items-md-start no-gutters" >
        <Col xs={12} md={{ offset: 0, span: 5 }}>
          {qr_code && (
            <img
              src={"../assets/imgs/header/" + qr_code}
              alt="qr-code.jpg"
              width="20%"
              className="pb-4"
            />
          )}
          <h1>{title}</h1>
          <div className="py-3 py-md-5 description">{description}</div>
          <Link href={app_access_link || ""} passHref={true}>
            <a target="_blank">
              <Button className="blue-btn mb-5" style={{ width: "auto" }}>
                Découvrir nos outils
              </Button>
            </a>
          </Link>
          <br />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          md={6}
        >
          <img src={"../assets/imgs/header/" + image} alt="header-phone" className="main-img" />
        </Col>
      </Row>
    </header>
  );
}
