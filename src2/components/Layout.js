import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>1000jours - Blues</title>
      </Head>
      <Container>{children}</Container>
    </React.Fragment>
  );
}
