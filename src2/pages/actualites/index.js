import React from "react";
import { Col, Row } from "react-bootstrap";

import article from "../../../config-yml/modules/articles.yml";
import { ArticleCard } from "../../components/ArticleCard";
import { Layout } from "../../components/Layout";

export default function index() {
  return (
    <Layout>
      <br />
      <Articles />
      <br />
    </Layout>
  );
}

function Articles() {
  return (
    <Row className="no-gutters">
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
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
