import React from "react";
import { Col, Row } from "react-bootstrap";

import PrivacyPolicy from "../../config-yml/legals/politique-confidentialite.yml";
import { Layout } from "../components/Layout";

export default function privacyPolicy() {
  return (
    <Layout>
      <br />
      <PolitiqueConfidentialite />
      <br />
    </Layout>
  );
}

function SousTraitsTab() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Partenaire</th>
            <th>Pays destinataire</th>
            <th>Traitement réalisé</th>
            <th>Garanties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Microsoft Azure</td>
            <td>France</td>
            <td>Hébergement</td>
            <td>
              <a href="https://privacy.microsoft.com/fr-fr/privacystatement">
                https://privacy.microsoft.com/fr-fr/privacystatement
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DureeConservationTab() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Types de données</th>
            <th>Durée de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Données relatives au questionnaire</td>
            <td>
              à compter de l’utilisation du droit d’opposition lors du contact
              par mail ou <strong>1 an</strong>, à compter de la réalisation du
              questionnaire.
            </td>
          </tr>
          <tr>
            <td>Données d’hébergeur</td>
            <td>
              <strong>1 an</strong>, conformément au décret n°2011-219 du 25
              février 2011.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function CookiesTab() {
  return (
    <>
      <br />
      <iframe
        title="matomo optout"
        style={{ border: 0, width: "100%" }}
        src="https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=2f3b6c&fontSize=16px&fontFamily=sans-serif"
      />
      À tout moment, vous pouvez refuser l’utilisation des cookies et désactiver
      le dépôt sur votre ordinateur en utilisant la fonction dédiée de votre
      navigateur (fonction disponible notamment sur Microsoft Internet Explorer
      11, Google Chrome, Mozilla Firefox, Apple Safari et Opera).
      <br />
      <br />
      Pour aller plus loin, vous pouvez consulter les fiches proposées par la
      Commission Nationale de l’Informatique et des Libertés (CNIL) :
      <br />
      <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi">
        - Cookies &amp; traceurs : que dit la loi ?
      </a>
      <br />
      <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser">
        - Cookies : les outils pour les maîtriser
      </a>
    </>
  );
}

function showTabByName(name) {
  switch (name) {
    case "cookies":
      return <CookiesTab />;
    case "duree_conservation":
      return <DureeConservationTab />;
    case "sous_traitants":
      return <SousTraitsTab />;
    default:
      return null;
  }
}

function PolitiqueConfidentialite() {
  return (
    <Row>
      <Col className="no-gutters">
        <h1 className="py-5">{PrivacyPolicy.title}</h1>
        {PrivacyPolicy.privacy_policy.map((notice, index) => (
          <Col
            key={index}
            className="w-100 no-gutters justify-content-between align-items-center pb-5"
          >
            <h2>{notice.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {notice.content}
              {showTabByName(notice.table_name)}
            </p>
          </Col>
        ))}
      </Col>
    </Row>
  );
}
