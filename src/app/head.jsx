export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,follow" />

      {/* Og */}
      <meta
        property="og:title"
        content="FicRec - Fanfiction Recommendation Engine"
      />
      <meta
        property="og:description"
        content="FicRec is a fanfiction recommendation engine that uses a neural network to embed search queries and fanfiction summaries into a common vector space. Given a search query, FicRec will return a list of fanfictions that are semantically similar to the query."
      />
      <meta property="og:site_name" content="FicRec" />
      <meta property="og:url" content="/" key="ogurl" />
      {/* Barlow */}
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow/Barlow-800.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Inter */}
      <link
        rel="preload"
        href="/fonts/Inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Sarina */}
      <link
        rel="preload"
        href="/fonts/Sarina/Sarina-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}
