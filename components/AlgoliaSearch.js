import React, { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const AlgoliaSearch = () => {
  useEffect(() => {
    if (window.algoliasearchNetlify) {
      window.algoliasearchNetlify({
        appId: 'F4TNI6LSR6',
        apiKey: '99a85f9f246db0f1bc851eb62c1d487b',
        siteId: '2f23ad21-13c9-4bd5-9615-63f9f6c52196',
        branch: 'main',
        selector: 'div#search',
      });
    }
  }, []);

  return (
    <>
      <Link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
        strategy="lazyOnload"
      />
      <div id="search" className="mt-6 max-w-md mx-auto"></div>
    </>
  );
};

export default AlgoliaSearch;
