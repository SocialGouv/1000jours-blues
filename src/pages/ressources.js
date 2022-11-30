import { Accordion, AccordionItem, Col } from "@dataesr/react-dsfr";
import { useRouter } from "next/router";
import React from "react";
import { page } from "../../config-yml/modules/ressources.yml";
import { Layout } from "../components/Layout";

const ressources = page;

export default function Ressources() {
  const router = useRouter()

  const openMailTo = () => router.push(`mailto:${ressources.epdsContact.mailContact}&subject=${ressources.epdsContact.mailSubject}`)

  return (
    <Layout>
      <div title="Ressources" className="py-5">
        <h1>{ressources.title}</h1>
      </div>

      <Col>
        <span className="font-weight-bold">{ressources.intro.title}</span>
        <br />
        <br />
        <p>{ressources.intro.content}</p>
      </Col>

      <Accordion className="accordion-smallscreen">
        <AccordionItem title={ressources.epdsProsDeSante.title}>
          <ItemHealthProfessionals />
        </AccordionItem>
        <AccordionItem title={ressources.epdsLignes.title}>
          <ItemTelephoneLines />
        </AccordionItem>
        <AccordionItem title={ressources.epdsSitesInformation.title}>
          <ItemSitesInformation />
        </AccordionItem>
        <AccordionItem title={ressources.epdsRessourcesPremiersMois.title}>
          <ItemResources />
        </AccordionItem>
        <AccordionItem title={ressources.epdsContact.title}>
          <ItemContact sendEmailOnClick={openMailTo} />
        </AccordionItem>
      </Accordion >

    </Layout>
  );
}

const ItemSitesInformation = () => (
  <div>
    {ressources.epdsSitesInformation.content.map((site, index) => (
      <div key={index}>
        {showUrl(site.url, site.url)}
        <br />
      </div>
    ))}
  </div>
)

const ItemTelephoneLines = () => (
  <div style={{ fontSize: 14 }}>
    <div className="ressources-contact-item">
      {ressources.epdsLignes.content.map((contact, index) => (
        <div style={{ marginBottom: 30 }} key={index}>
          <div className="resources-contact-title">{contact.contactName}</div>
          <div>{contact.thematic}</div>
          <div className="font-weight-bold">{contact.openingTime}</div>
          <div style={{ display: "-webkit-inline-box" }}>
            <img
              alt=""
              height={17}
              style={{ marginRight: 10 }}
              src="/assets/imgs/resources/icone-telephone.svg"
            />
            <div className="font-weight-bold">{contact.phoneNumber}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ItemResources = () => (
  <div>
    {ressources.epdsRessourcesPremiersMois.content.map((resource, index) => (
      <div
        className={`ressources-item ${index > 0 ? "ressources-item-border" : ""
          }`}
        key={index}
      >
        <b>{resource.name}</b>
        {resource.description}
      </div>
    ))}
  </div>
)

const ItemContact = ({ sendEmailOnClick }) => (
  <div style={{ textAlign: "center" }}>
    <p style={{ textAlign: "justify" }}>{ressources.epdsContact.content}</p>
    <button className="fr-btn" onClick={sendEmailOnClick}>
      {ressources.epdsContact.button}
    </button>
  </div>
)

const ItemHealthProfessionals = () => (
  <div>
    {ressources.epdsProsDeSante.content.map((item, index) => (
      <div
        className={`ressources-item ${index > 0 ? "ressources-item-border" : ""
          }`}
        key={index}
      >
        <b>{item.name}</b>
        <br />
        {item.description}
        <br />
        {item.url
          ? showUrl(item.url, ressources.boutonConsulterDocument)
          : ""}
      </div>
    ))}
  </div>
)

const showUrl = (url, text) => (
  <a
    href={url}
    target="_blank"
    style={{ textDecoration: "underline" }}
    rel="noreferrer"
  >
    {text}
  </a>
)

