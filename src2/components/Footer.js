import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

import footer from "../../config-yml/commons/footer.yml";

const LightLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color: "var(--primary)",
        fontWeight: "700",
      }}
    >
      {children}
    </a>
  </Link>
);

const Separator = () => <span className="px-2 text-lightergray"> | </span>;
export function Footer() {
  return (
    <footer style={{ marginTop: "100px" }}>
      <div className="container">
        <Col className="p-0">
          <Row className="w-100 justify-content-between align-items-center no-gutters">
            <Col xs={6} md={2}>
              <img
                src={"/assets/imgs/marianne.svg"}
                alt="marianne-logo"
                width="55"
                height="auto"
                className="mb-4"
              />
              <p className="font-weight-bold text-uppercase mb-2">Ministère des solidarités et de la santé</p>
              <img
                src={"/assets/imgs/devises.svg"}
                alt="marianne-logo"
                width="52"
                height="auto"
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="pb-4 pt-2 pt-md-0" style={{ fontSize: "13px" }}>
                {footer.description}
              </div>
              <ul className="list-inline">
                {footer.menuList.map((item, index) => (
                  <li className="list-inline-item pr-2" key={index}>
                    <LightLink href={item.url}>{item.name}</LightLink>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row className="w-100 justify-content-between align-items-end no-gutters">
            <Col xs={12} md={2}>
              <div
                className="pb-1 small-title"
                style={{ color: "var(--darkgray)" }}
              >
                Nos partenaires:
              </div>
              <img
                src={
                  "/assets/imgs/sponsors/" + footer.principalSponsor[0].image
                }
                alt="sponsor"
                width="162px"
              />
            </Col>
            <Col
              xs={12}
              md={8}
              className="justify-content-md-end d-flex flex-wrap"
            >
              {footer.sponsors.map((item, index) => (
                <LightLink key={index} href={item.url}>
                  <img
                    className="ml-md-2"
                    src={"/assets/imgs/sponsors/" + item.image}
                    alt="sponsor"
                    width="162px"
                  />
                </LightLink>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row
            className="justify-content-between w-100 pb-2 no-gutters"
            style={{ fontSize: "12px", color: "var(--lightgray)" }}
          >
            <ul className="list-inline">
              {footer.bottomMenuList.map((item, index) => (
                <li className="list-inline-item" key={index}>
                  <a href={item.slug} style={{ color: "var(--lightgray)" }}>
                    {item.name}
                  </a>
                  <Separator />
                </li>
              ))}
            </ul>
            <div>{footer.copyright}</div>
          </Row>
        </Col>
      </div>
    </footer>
  );
}
