import { useRouter } from "next/router";
import Breadcrumbs from "nextjs-breadcrumbs";
import React from "react";
import { Row } from "react-bootstrap";

export function Breadcrumb() {
  const router = useRouter();
  return (
    <Row className="align-items-end no-gutters">
      {router.pathname !== "/" && (
        <>
          <img
            src="/assets/imgs/icons/arrow-right.svg"
            onClick={() => router.back()}
            alt="arrow-icon.svg"
            style={{ transform: "rotate(-180deg)", cursor: "pointer" }}
          />
          <div className="pl-2 breadcrumbs">
            <Breadcrumbs
              rootLabel="Accueil"
              activeItemClassName="breadcrumbs-active"
            />
          </div>
        </>
      )}
    </Row>
  );
}
