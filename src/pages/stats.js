import React from "react";
import { page } from "../../config-yml/modules/stats.yml";
import { Layout } from "../components/Layout";

const stats = page;

export default function Stats() {
  return (
    <Layout>
      <div title="Statistiques" className="py-5">
        <h1 className="pb-5">{stats.title}</h1>
        <iframe src="https://matomo-metabase-les1000jours.fabrique.social.gouv.fr/public/dashboard/9a9d41b7-a3c9-44df-b820-591c866f227c"
          frameborder="0" width="100%" height="600" allowtransparency />
      </div>
    </Layout>
  );
}
