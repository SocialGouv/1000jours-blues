import { Accordion, AccordionItem, Col, Row } from "@dataesr/react-dsfr";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { page } from "../../config-yml/modules/ressources.yml";
import { Layout } from "../components/Layout";

const ressources = page;

export default function Ressources() {
  const PATTERN_EMAIL = "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
  const PATTERN_PHONE_NUMBER = "[0-9]{10}"

  const classNameByIndex = (index) => `resources-item ${index > 0 ? "resources-item-border" : ""}`

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
      <div className="resources-contact-item">
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
          className={classNameByIndex(index)}
          key={index}
        >
          <b>{resource.name}</b>
          {resource.description}
        </div>
      ))}
    </div>
  )

  const ItemContact = () => {
    const [isEnabledButton, setEnabledButton] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);

    const [emailValue, setEmailValue] = useState("");
    const [phoneNumberValue, setPhoneNumberValue] = useState("");

    const handleValidEmail = (event) => {
      setEmailValid(event.currentTarget.validity.valid)
      setEmailValue(event.currentTarget.value)
    }
    const handleValidPhone = (event) => {
      setPhoneNumberValid(event.currentTarget.validity.valid)
      setPhoneNumberValue(event.currentTarget.value)
    }

    useEffect(() => {
      setEnabledButton(isEmailValid || isPhoneNumberValid)
    }, [isEmailValid, isPhoneNumberValid])

    const sendEmailOnClick = () => {
      console.log(emailValue)
      console.log(phoneNumberValue)
    }

    return (
      <div className="resources">
        <p style={{ textAlign: "justify" }}>{ressources.epdsContact.content}</p>

        <Row>
          <div className="fr-input-group resources-input">
            <label className="fr-label" for="email">
              Adresse électronique
              <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
            </label>
            <input
              className="fr-input"
              name="email"
              id="email"
              type="email"
              pattern={PATTERN_EMAIL}
              onChange={handleValidEmail}
            />
          </div>

          <div className="fr-input-group resources-input">
            <label className="fr-label" for="tel">
              Numéro de téléphone
              <span className="fr-hint-text">Format attendu : (+33) 1 22 33 44 55</span>
            </label>
            <input
              className="fr-input"
              aria-describedby="tel-1-message-error"
              id="tel"
              type="tel"
              pattern={PATTERN_PHONE_NUMBER}
              onChange={handleValidPhone}
            />
          </div>
        </Row >

        <button className="fr-btn resources-button"
          onClick={sendEmailOnClick}
          disabled={!isEnabledButton}>
          {ressources.epdsContact.button}
        </button>
      </div>
    )
  }

  const ItemHealthProfessionals = () => (
    <div>
      {ressources.epdsProsDeSante.content.map((item, index) => (
        <div
          className={classNameByIndex(index)}
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
          <ItemContact />
        </AccordionItem>
      </Accordion >

    </Layout>
  );
}

