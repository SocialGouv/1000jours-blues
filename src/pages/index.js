import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import header from "../../config-yml/commons/header.yml";
import articles from "../../config-yml/modules/articles.yml";
import instagram from "../../config-yml/modules/instagram.yml";
import newsletter from "../../config-yml/modules/newsletter.yml";
import onboarding from "../../config-yml/modules/onboarding.yml";
import partners from "../../config-yml/modules/partners.yml";
import article from "../../config-yml/modules/articles.yml";
import { home } from "../../config-yml/modules/stats.yml";
import { ArticleCard } from "../components/ArticleCard";
import { Header } from "../components/Header";
import InstagramPostList from "../components/InstagramPostList";
import { Layout } from "../components/Layout";
import Newsletter from "../components/Newsletter";
import { Onboarding } from "../components/Onboarding";

const stats = home;

export default function index({ posts }) {
  return (
    <Layout>
      <br />
      <MainHeader />
      <br />
      <br />
      <Articles />
      <br />
      <br />
      <Statistic />
      <br />
      <br />
      <Partners />
      <br />
      <br />
      <News />
      <br />
      <br />
      <OnboardingSection />
      <br />
      <br />
      <Instagram posts={posts} />
    </Layout>
  );
}

function MainHeader() {
  return (
    <div id="accueil" className="my-lg-5">
      <Header
        title={header.mainTitle}
        description={header.subtitle}
        image={header.image_prototype_name}
        qr_code={header.qr_code}
        app_access_link={header.app_access_link}
        googleplay_link={header.googleplay_link}
        appStore_link={header.appStore_link}
      />
    </div>
  );
}

function Statistic() {
  return (
    stats.display && (
      <Row className="d-flex flex-column pb-5 no-gutters">
        <Col>
          <h2 className="pb-lg-5">{stats.title}</h2>
        </Col>
        <p style={{ textAlign: "center" }}>
          {stats.content} : <br />
          <a
            href={stats.url}
            rel="noreferrer"
            className="blue-btn mt-2 btn btn-primary"
          >
            {stats.urlLabel}
          </a>
        </p>
      </Row>
    )
  );
}

function Partners() {
  return (
    <Row className="d-flex flex-column pb-5 no-gutters">
      <Col>
        <h2>{partners.title}</h2>
        <div className="py-3 description">{partners.description}</div>
      </Col>
      <Col
        className="d-flex justify-content-around w-100 align-items-center flex-wrap"
        style={{ flexDirection: "row" }}
      >
        {partners.list.map((partner, index) => (
          <Col key={index} className="col-3">
            <img
              width="100%"
              src={"../assets/imgs/partners/" + partner.image}
              alt="icon-partenaire"
            />
          </Col>
        ))}
      </Col>
    </Row>
  );
}

function News() {
  return (
    newsletter.display && (
      <Newsletter title={newsletter.title} subtitle={newsletter.subtitle} />
    )
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/assets/imgs/icons/slider-arrow-right.svg"
      alt="flèche"
      style={{ ...style, position: "absolute !important" }}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/assets/imgs/icons/slider-arrow-left.svg"
      alt="flèche"
      style={{ ...style, position: "absolute !important" }}
      className={className}
      onClick={onClick}
    />
  );
}

function Articles() {
  const settings = {
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow:
            articles.articles.length < 3 ? articles.articles.length : 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          initialSlide: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: articles.articles.length < 3 ? articles.articles.length : 3,
    speed: 500,
  };
  return (
    articles.display && (
      <Row id="actualites" className="d-flex flex-column pb-5 no-gutters">
      <Col>
        <h1 className="pb-4">{article.title}</h1>
        <div className="description">{article.description}</div>
        <Row className="flex-wrap pt-5">
          {article.articles.map((article, index) => (
            <Col md={4} key={index} className="pb-4 no-gutters">
              <ArticleCard
                title={article.title}
                image={article.image}
                description={article.description}
                category={article.category}
                slug={article.slug}
                key={index}
              />
            </Col>
          ))}
        </Row>
      </Col>
      </Row>
    )
  );
}

function OnboardingSection() {
  return (
    onboarding.display && (
      <div id="onboarding">
        <Onboarding
          title={onboarding.title}
          description={onboarding.description}
          image={onboarding.image}
        />
      </div>
    )
  );
}
function Instagram({ posts }) {
  return (
    instagram.display && (
      <InstagramPostList title={instagram.title} posts={posts} />
    )
  );
}
