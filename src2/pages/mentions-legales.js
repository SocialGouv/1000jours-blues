import React from "react";
import { Col, Row } from "react-bootstrap";

import LegalNotice from "../../config-yml/legals/mentions-legales.yml";
import { Layout } from "../components/Layout";

export default function legalNotice() {
  return (
    <Layout>
      <br />
      <MentionsLegales />
      <br />
    </Layout>
  );
}

function MentionsLegales() {
  return (
    <Row>
      <Col className="no-gutters">
        <h1 className="py-5">{LegalNotice.title}</h1>
        {LegalNotice.legalNotice.map((notice, index) => (
          <Col
            key={index}
            className="w-100 no-gutters justify-content-between align-items-center pb-5"
          >
            <h2>{notice.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{notice.content}</p>
          </Col>
        ))}
      </Col>
    </Row>
  );
}
