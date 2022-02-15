import React from "react";
import { Col, Row } from "react-bootstrap";

export function Stats({ title, icon, value }) {
  return (
    <Row className="justify-content-between w-100 align-items-md-baseline">
      <img src={"../assets/imgs/icons/" + icon} alt="stat-icon" />
      <Col>
        <div className="big-title" style={{ lineHeight: "initial" }}>
          {value}
        </div>
        <div>{title}</div>
      </Col>
    </Row>
  );
}
