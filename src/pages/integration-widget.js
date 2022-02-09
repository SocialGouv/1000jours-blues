import React from "react";
import { Col, Row } from "react-bootstrap";
import { CodeBlock, dracula } from "react-code-blocks";

import Labels from "../../config-yml/modules/integration-widget.yml";
import { Layout } from "../components/Layout";
import SpecialParagraph from "../components/SpecialParagraph";

export default function widgetIntegration() {
  return (
    <Layout>
      <br />
      <IntegrationWidget />
      <br />
    </Layout>
  );
}

function IntegrationWidget() {
  const code = `<iframe
    src = "https://nos1000jours-blues-epds-widget.fabrique.social.gouv.fr?source=monsiteweb"
    width = "100%"
    height = "600px"
  ></iframe >`;

  return (
    <Row>
      <Col className="no-gutters">
        <h1 className="py-5">{Labels.title}</h1>

        <div className="px-4 pb-4">
          <SpecialParagraph content={Labels.description} />
        </div>

        <iframe
          title="Widget EPDS"
          src="https://nos1000jours-blues-epds-widget-preprod.dev.fabrique.social.gouv.fr?source=1000jblues-integration"
          width="100%"
          height="600px"
          style={{ border: "1px solid gray" }}
        />

        <Col md={{ offset: 2, span: 8 }}>
          <div className="font-weight-bold pb-5" style={{ fontSize: "32px" }}>
            {Labels.iframe.title}
          </div>
          <p className="content-article" style={{ whiteSpace: "pre-wrap" }}>
            {Labels.iframe.description}
            <br />
            <br />
            {Labels.iframe.source_required}
            <br />
            <br />
            <CodeBlock
              text={code}
              language={"html"}
              showLineNumbers={false}
              theme={dracula}
            />
            <br />
            {Labels.iframe.custom}
          </p>

          <div className="font-weight-bold pb-5" style={{ fontSize: "32px" }}>
            {Labels.mosaique.title}
          </div>
          <p className="content-article" style={{ whiteSpace: "pre-wrap" }}>
            {Labels.mosaique.description}
          </p>
        </Col>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <iframe
            title="Widget EPDS moyen"
            src="https://nos1000jours-blues-epds-widget-preprod.dev.fabrique.social.gouv.fr?source=1000jblues-integration"
            width="550px"
            height="550px"
            style={{ border: "1px solid gray" }}
          />
          <iframe
            title="Widget EPDS petit"
            src="https://nos1000jours-blues-epds-widget-preprod.dev.fabrique.social.gouv.fr?source=1000jblues-integration"
            width="auto"
            height="400px"
            style={{ border: "1px solid gray" }}
          />
        </div>

        <Col md={{ offset: 2, span: 8 }}>
          <p className="content-article" style={{ whiteSpace: "pre-wrap" }}>
            <br />
            {Labels.contact} : {Labels.email_contact}
          </p>
        </Col>
      </Col>
    </Row>
  );
}
