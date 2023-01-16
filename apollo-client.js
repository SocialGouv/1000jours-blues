import { ApolloClient, gql, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "cross-fetch"
import { API_URL } from "./src/utils/constants.util"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: { "content-type": "application/json" },
  link: new HttpLink({ uri: `${API_URL}/graphql?nocache`, fetch }),
})

export const EPDS_CONTACT_INFORMATION = gql`
  mutation (
    $email: String
    $telephone: String
    $prenom: String
    $nombreEnfants: Int
    $naissanceDernierEnfant: String
    $moyen: String
    $horaires: String
  ) {
    epdsContact(
      email: $email
      telephone: $telephone
      prenom: $prenom
      nombre_enfants: $nombreEnfants
      naissance_dernier_enfant: $naissanceDernierEnfant
      moyen: $moyen
      horaires: $horaires
    )
  }
`

export const SAVE_DEMANDE_DE_CONTACT = gql`
  mutation (
    $typeDeContact: ENUM_DEMANDEDECONTACT_TYPE_DE_CONTACT
    $widgetEpdsSource: ID
    $reponsesEpds: ID
  ) {
    createDemandeDeContact(
      input: {
        data: {
          type_de_contact: $typeDeContact
          widget_epds_source: $widgetEpdsSource
          reponses_epds: $reponsesEpds
        }
      }
    ) {
      demandeDeContact {
        id
        created_at
      }
    }
  }
`
