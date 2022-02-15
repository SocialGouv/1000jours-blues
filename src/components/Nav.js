import { useRouter } from "next/router";
import React from "react";
import { Container, Nav as BSNav, Navbar } from "react-bootstrap";

import nav from "../../config-yml/commons/nav.yml";

export function Nav() {
  const router = useRouter();
  return (
    <Navbar expand="lg" className="py-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <a className="d-flex align-items-center" href="/">
          <img
            src={"/assets/imgs/marianne.svg"}
            alt="marianne-logo"
            width="100%"
            height="100%"
            style={{ marginRight: "40px" }}
          />
          <img
            src={"/assets/imgs/logo-1000j-blues.svg"}
            alt="app-logo"
            width="100%"
            height="100%"
          />
        </a>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <BSNav>
            {nav.menuList.map((menu) => (
              <a
                key={menu.slug}
                href={menu.slug}
                className={
                  router.pathname == menu.slug
                    ? "active font-weight-bold ml-lg-5"
                    : "ml-lg-5"
                }
              >
                {menu.name}
              </a>
            ))}
            <a href={"mailto:" + nav.contact_mailto} className="ml-lg-5">
              {nav.contact}
            </a>
          </BSNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
