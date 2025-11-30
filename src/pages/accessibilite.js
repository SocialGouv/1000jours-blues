import React from "react";
import { Col, Row } from "react-bootstrap";

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
      <Col className="no-gutters accessibility-content">
        <h1 className="py-5">Déclaration d’accessibilité</h1>
        {generatedStatement()}
      </Col>
    </Row>
  );
}

const generatedStatement = () => {
  const writingDate = "2 novembre 2022"
  const accessibilityState = "non conforme"

  return (<div>
    <p>Établie le {writingDate}.</p>
    <p>Ministère des Solidarités, de l'Autonomie et des personnes handicapées s’engage à rendre son service accessible, conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.</p>
    <p>Cette déclaration d’accessibilité s’applique à <strong>nos1000jours-blues</strong> (https://nos1000jours-blues-epds-widget.fabrique.social.gouv.fr/).</p>
    <br />

    <h2>État de conformité</h2>
    <p>
      <strong>nos1000jours-blues</strong> est <strong>{accessibilityState}</strong> avec le <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr>.
      Le site n’a encore pas été audité.
    </p>
    <br />

    {/* <h2>Contenus non accessibles</h2> */}

    {/* <h2>Amélioration et contact</h2>
    <p>Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable de nos1000jours-blues pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.</p>
    <ul>
      <li>
        Formulaire de contact : <a href="1000joursblues@fabrique.social.gouv.fr">1000joursblues@fabrique.social.gouv.fr</a>
      </li>
    </ul>
    <p>
      Nous essayons de répondre dans les 2 jours ouvrés.
    </p>
    <br /> */}

    <h2>Voie de recours</h2>
    <p>Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.</p>
    <p>Vous pouvez :</p>
    <ul>
      <li>Écrire un message au <a href="https://formulaire.defenseurdesdroits.fr/">Défenseur des droits</a></li>
      <li>Contacter <a href="https://www.defenseurdesdroits.fr/saisir/delegues">le délégué du Défenseur des droits dans votre région</a></li>
      <li>Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) : <br />
        Défenseur des droits<br />
        Libre réponse 71120 75342 Paris CEDEX 07
      </li>
    </ul >
    <br />

    <p>
      Cette déclaration d’accessibilité a été créé le {writingDate} grâce au <a href="https://betagouv.github.io/a11y-generateur-declaration/#create">Générateur de Déclaration d’Accessibilité de BetaGouv</a>.
    </p>
  </div >)
};
