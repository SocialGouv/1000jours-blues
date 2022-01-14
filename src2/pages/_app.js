import "bootstrap/dist/css/bootstrap.css";
import "../assets/sass/bootstrap-theme.scss";
import "../assets/sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { init } from "@socialgouv/matomo-next";
import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const theme = {
  colors: {},
};

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Nav />
        <div className="breadcrumbs container">
          <Breadcrumb />
        </div>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MyApp;
