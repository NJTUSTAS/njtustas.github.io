import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import style from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.title}>
      <main className={style.main}>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </main>
    </Layout>
  );
}
