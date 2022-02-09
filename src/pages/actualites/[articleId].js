import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import articles from "../../../config-yml/modules/articles.yml";
import { Layout } from "../../components/Layout";
import SpecialParagraph from "../../components/SpecialParagraph";

export default function articleId() {
  return (
    <Layout>
      <br />
      <Article />
      <br />
    </Layout>
  );
}

function Article() {
  const router = useRouter();
  const articleId = router.query.articleId;
  const [singleArticle, setSingleArticle] = useState({});

  const getSingleArticle = () => {
    setSingleArticle(
      articles.articles.find((article) => article.slug === articleId)
    );
  };

  useEffect(() => {
    if (articleId) {
      getSingleArticle();
    }
  }, [router]);

  return (
    <Row className="no-gutters">
      {singleArticle && (
        <Col>
          <h1 className="pb-4">{singleArticle.title}</h1>
          <div className="px-4 pb-4">
            <SpecialParagraph content={singleArticle.description} />
          </div>
          <img
            src={
              singleArticle.image &&
              "../../assets/imgs/articles/" + singleArticle.image
            }
            className="w-100 pb-4"
            alt="article-preview.jpg"
          />
          <Col md={{ offset: 2, span: 8 }}>
            <div className="font-weight-bold pb-5" style={{ fontSize: "32px" }}>
              {singleArticle.title_content}
            </div>
            <p className="content-article" style={{ whiteSpace: "pre-wrap" }}>
              {singleArticle.content}
            </p>
            <a
              href={singleArticle.button_url}
              target="_blank"
              rel="noreferrer"
              className="blue-btn mb-5 btn btn-primary"
            >
              {singleArticle.button_text}
            </a>
          </Col>
        </Col>
      )}
    </Row>
  );
}
