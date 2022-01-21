import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export function Onboarding({ title, description, image }) {
  return (
    <Row className="mb-5">
      <Col className="d-flex flex-column justify-content-between ">
        <h2 className="pb-4">{title}</h2>
        <p className="pb-1">{description}</p>
        <Link href="referent">
          <Button className="btn-blue-arrow mb-5 mb-lg-0">
            <div className="pr-4">En savoir plus</div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z"
                fill="#ffffff"
              />
            </svg>
          </Button>
        </Link>
      </Col>
      <Col md={6} className="d-flex justify-content-end">
        <img
          src={"../assets/imgs/" + image}
          alt="referent.jpg"
          className="w-100"
        />
      </Col>
    </Row>
  );
}
