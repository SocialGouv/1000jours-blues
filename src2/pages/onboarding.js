import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import onboarding from "../../config-yml/modules/onboarding.yml";
import { Layout } from "../components/Layout";

export default function referent() {
  return (
    <Layout>
      <br />
      <OnboardingSection />
      <br />
    </Layout>
  );
}

function getInitialState() {
  const state = {};

  onboarding.fields.forEach((field) => {
    state[field.name] = field.value;
  });

  return state;
}

function OnboardingSection() {
  const [showMessage, setShowMessage] = useState(false);
  const [formState, setFormState] = useState(getInitialState());

  const getFields = () => {
    return onboarding.fields
      .filter((field) => field.editable)
      .map((field) => {
        return (
          <Col md={field.col || 6} key={field.name} className="flex flex-wrap">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formState[field.name]}
              onChange={handleChange}
              className="mb-4 w-100"
              required={field.required}
            />
          </Col>
        );
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };

  const clearState = () => {
    setFormState(getInitialState());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(onboarding.url, formState).then(() => {
      setShowMessage(true);
      clearState();
    });
  };

  return (
    <Row className="no-gutters">
      <Col>
        <h1 className="pb-4">{onboarding.title}</h1>
        <div className="description pb-md-5">{onboarding.description}</div>
        <Row className="py-5">
          <Col md={6}>
            <form action="" method="POST" onSubmit={handleSubmit}>
              <h2 className="pb-4">{onboarding.form_section_title}</h2>
              <Row className="flex-wrap align-items-center">{getFields()}</Row>
              <Col>
                <Row className="no-gutters w-100 justify-content-center mt-3 mb-3 mb-md-0">
                  <input
                    type="submit"
                    value="Envoyer ma demande"
                    style={{
                      background: "darkblue",
                      border: "none",
                      color: "white",
                      padding: "8px 24px",
                    }}
                  />
                </Row>
                <div className="text-center w-100 pt-3 pb-5">
                  {showMessage && "Votre demande a bien été envoyée."}
                </div>
              </Col>
            </form>
          </Col>
          <Col md={6}>
            <h2 className="pb-4">{onboarding.list_section_title}</h2>
            <div className="no-gutters">
              <ul>
                {onboarding.list_section_items &&
                  onboarding.list_section_items.map((advantage, index) => (
                    <li key={index} xs={6}>
                      <p className="text-darkgray">{advantage}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="w-100 no-gutters pt-5">
          {onboarding.testimony &&
            onboarding.testimony.map((testimony, index) => (
              <Row
                key={index}
                className="w-100 no-gutters justify-content-between align-items-center pb-5"
              >
                <Col
                  md={8}
                  className="bg-gray"
                  style={{
                    borderLeft: "5px solid darkblue",
                    padding: "32px 44px",
                  }}
                >
                  <h3>{testimony.title}</h3>
                  <p>{testimony.content}</p>
                </Col>
                <Col md={4} className="no-gutters px-0">
                  <img
                    src={"../assets/imgs/testimony/" + testimony.image}
                    alt={`Onboarding testimony ${index}`}
                    className="float-right testimony-onboarding-img"
                  />
                </Col>
              </Row>
            ))}
        </Row>
      </Col>
    </Row>
  );
}
