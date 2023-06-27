import Link from "next/link";
import React from "react";

export function ArticleCard({ title, image, description, category, slug }) {
  return (
    <div className="col-container">
      <div className="col" style={{ background: "var(--beige)", padding: "30px" }}>
        <div style={{ fontSize: "12px", color: "var(--black)" }}>
          {category}
        </div>
        <h3 style={{ padding: "16px 0 8px 0" }}>{title}</h3>
        <div className="small-title" style={{ paddingBottom: "20px" }}>
          {description.replace(/(.{200})..+/, "$1…")}
        </div>
        <Link href={"actualites/" + slug}>
          <button className="d-flex w-auto border-0 bg-transparent ml-auto justify-content-end align-content-end article-arrow">
            <img src="/assets/imgs/icons/arrow-right.svg" alt="arrow-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}
