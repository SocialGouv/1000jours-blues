import {
  Footer as FooterDsfr,
  FooterBody,
  FooterBodyItem,
  FooterBottom,
  FooterCopy,
  FooterLink,
  Logo,
} from "@dataesr/react-dsfr";
import Link from "next/link";
import React from "react";

import footer from "../../config-yml/commons/footer.yml";

export function Footer() {
  return (
    <FooterDsfr>
      <FooterBody description={footer.laFabrique}>
        <Logo>{footer.republiqueFrancaise}</Logo>
        {footer.liensGouv.map((item, index) => (
          <FooterBodyItem KEY={index}>
            <Link href={item.url}>{item.name}</Link>
          </FooterBodyItem>
        ))}
      </FooterBody>

      <FooterBottom>
        {footer.bottomMenuList.map((item, index) => (
          <FooterLink key={index} href={item.slug}>
            {item.name}
          </FooterLink>
        ))}
        <FooterCopy>
          {footer.licence}{" "}
          <a
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
            rel="noreferrer"
          >
            licence etalab-2.0
          </a>
        </FooterCopy>
      </FooterBottom>
    </FooterDsfr>
  );
}
