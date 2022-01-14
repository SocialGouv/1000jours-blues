import Link from "next/link";
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
        <Link href={"/"}>
          <a className="d-flex align-items-center ">
            <img
              src={"/assets/imgs/marianne.svg"}
              alt="marianne-logo"
              width="100%"
              height="100%"
              style={{ marginRight: "40px" }}
            />
            <img
              src={"/assets/imgs/logo_1000jBlues.svg"}
              alt="app-logo"
              width="100%"
              height="100%"
            />
          </a>
        </Link>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <BSNav>
            {nav.menuList.map((menu) => (
              <Link href={menu.slug} key={menu.slug}>
                <a
                  className={
                    router.pathname == menu.slug ? "active font-weight-bold ml-lg-5" : "ml-lg-5"
                  }
                >
                  {menu.name}
                </a>
              </Link>
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
