import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { page } from "../../config-yml/modules/stats.yml";
import { Layout } from "../components/Layout";

const stats = page;

// convert yaml format to recharts format
const toGraphData = ({ valeurs }) =>
  Object.keys(valeurs).map((key) => ({
    date: new Date(key).toLocaleDateString("fr-FR"),
    value: valeurs[key],
  }));

const Graph = ({ kpi }) => {
  const data = toGraphData(kpi);
  return (
    <div className="pb-5">
      <h2 className="pb-3">{kpi.titre}</h2>
      <LineChart
        width={stats.chartWidth}
        height={stats.chartHeight}
        data={data}
        margin={{ bottom: 20, left: 0, right: 50, top: 20 }}
      >
        <XAxis dataKey="date">
          <Label
            value={kpi.name}
            offset={-15}
            position="insideBottom"
            style={{ fill: "darkblue", marginBottom: 10 }}
          />
        </XAxis>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="value"
          stroke="darkblue"
          name={kpi.name}
        />
      </LineChart>
      <hr />
    </div>
  );
};
const RenderBarChart = ({ kpi }) => {
  const data = toGraphData(kpi);
  return (
    <div className="pb-5">
      <h2 className="pb-3">{kpi.titre}</h2>
      <BarChart
        width={stats.chartWidth}
        height={stats.chartHeight}
        data={data}
        margin={{ bottom: 20, left: 0, right: 50, top: 20 }}
      >
        <XAxis dataKey="date" stroke="gray">
          <Label
            value={kpi.titre}
            offset={-15}
            position="insideBottom"
            style={{ fill: "darkblue", marginBottom: 10 }}
          />
        </XAxis>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="darkblue" barSize={30} name={kpi.name} />
      </BarChart>
      <hr />
    </div>
  );
};
export default function Stats() {
  return (
    <Layout>
      <div title="Statistiques" className="py-5">
        <h1 className="pb-5">{stats.title}</h1>
        {stats.graphs.map((kpi, index) => {
          switch (kpi.affichage) {
            case "graph":
              if (kpi.type === "barChart") {
                return <RenderBarChart key={index} kpi={kpi} />;
              } else {
                return <Graph key={index} kpi={kpi} />;
              }
            case "chiffre_cle":
              return (
                <h4 key={index}>
                  {kpi.titre}: {kpi.valeur}
                </h4>
              );
          }
        })}
      </div>
    </Layout>
  );
}
