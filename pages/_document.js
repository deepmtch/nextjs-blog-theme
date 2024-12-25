import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
        </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
          <Script
            src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
            strategy="afterInteractive"
          />
          <Script id="algolia-init" strategy="afterInteractive">
            {`
              algoliasearchNetlify({
                appId: 'F4TNI6LSR6',
                apiKey: '99a85f9f246db0f1bc851eb62c1d487b',
                siteId: '2f23ad21-13c9-4bd5-9615-63f9f6c52196',
                branch: 'main',
                selector: 'div#search',
              });
            `}
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
