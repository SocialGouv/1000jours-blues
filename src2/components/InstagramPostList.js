import React from "react";
import { Button } from "react-bootstrap";

const InstagramPostList = ({ title, posts }) => {
  const renderPost = (
    <div className="d-flex flex-column w-100">
      <h2 className="pb-4">{title}</h2>
      <div className="d-flex align-items-center w-100 justify-content-between pb-4">
        <div className="d-flex align-items-center">
          <img
            src={"/assets/imgs/instagram-logo.svg"}
            alt="logo"
            width="auto"
            height="100%"
            style={{
              background: "black",
              borderRadius: "3px",
              padding: "4px",
              marginRight: "30px",
            }}
          />
          <div className="pr-2">{posts.map((post) => post.username)[0]}</div>
        </div>
        <div className="d-flex align-items-center flex-row">
          <a
            href={"https://www.instagram.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="text-uppercase border-0"
              style={{
                background: "#C80352",
                fontSize: "12px",
                padding: "4px 16px",
              }}
            >
              follow
            </Button>
          </a>
          <img
            src={"/assets/imgs/icons/instagram.svg"}
            alt="instagram-logo"
            width="auto"
            height="100%"
            style={{
              paddingLeft: "32px",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap" style={{ padding: "0 8% 0 8%" }}>
        {posts.map((post, index) => (
          <a
            href={post.permalink}
            target="_blank"
            key={index}
            rel="noreferrer"
            style={{ width: "33%" }}
          >
            <img
              src={post.media_url || post.thumbnail_url}
              alt={post.media_type}
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
  return renderPost;
};

export default InstagramPostList;
