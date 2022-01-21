import React from "react";
import { Col, Row } from "react-bootstrap";

import Accessibility from "../../config-yml/legals/accessibilite.yml";
import { Layout } from "../components/Layout";

export default function accessibilite() {
  return (
    <Layout>
      <br />
      <Accessibilite />
      <br />
    </Layout>
  );
}

function Accessibilite() {
  return (
    <Row>
      <Col className="no-gutters">
        <h1 className="py-5">{Accessibility.title}</h1>
        {Accessibility.accessibilities.map((accessibility, index) => (
          <Col
            key={index}
            className="w-100 no-gutters justify-content-between align-items-center pb-5"
          >
            <h2>{accessibility.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{accessibility.content}</p>
          </Col>
        ))}
      </Col>
    </Row>
  );
}
