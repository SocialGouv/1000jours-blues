import React from "react";
import { Col, Row } from "react-bootstrap";

import PersonalData from "../../config-yml/legals/donnees-perso-cookies.yml";
import { Layout } from "../components/Layout";

export default function donneesPersonnelles() {
  return (
    <Layout>
      <br />
      <Personal_data_cookies />
      <br />
    </Layout>
  );
}

function Personal_data_cookies() {
  return (
    <Row>
      <Col className="no-gutters">
        <h1 className="py-5">{PersonalData.title}</h1>
        {PersonalData.personal_data.map((data, index) => (
          <Col
            key={index}
            className="w-100 no-gutters justify-content-between align-items-center pb-5"
          >
            <h2>{data.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.content}</p>
          </Col>
        ))}
      </Col>
    </Row>
  );
}
