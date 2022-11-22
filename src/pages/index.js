import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Middle() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.centerText}>
        <Link
          to="https://baike.baidu.com/item/%E5%B2%82%E8%83%BD%E5%B0%BD%E5%A6%82%E4%BA%BA%E6%84%8F%EF%BC%8C%E4%BD%86%E6%B1%82%E6%97%A0%E6%84%A7%E6%88%91%E5%BF%83"
        >
          <p>岂能尽如人意，但求无愧我心。</p>
        </Link>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Middle />
      </main>
    </Layout>
  );
}
