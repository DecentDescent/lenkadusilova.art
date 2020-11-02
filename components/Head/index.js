import Head from "next/head";

const HeadComponent = (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Lenka Dusilová {props.title ? " — " + props.title : null}</title>
    <meta
      name="description"
      content="Žánrově nezařaditelná, charismatická zpěvačka, šestinásobná držitelka výročních hudebních cen Anděl, není zvyklá stagnovat a opakovat se. Stal se z ní mimořádný úkaz české hudební scény, kdy z pozice rockové a popové hvězdy putuje k osobnímu vyjádření, jež svobodně přijímá impulzy z nejrůznějších stylů a mimohudebních zážitků."
    />
    <meta property="og:title" content="Lenka Dusilová" />
    <meta
      property="og:description"
      content="Žánrově nezařaditelná, charismatická zpěvačka, šestinásobná držitelka výročních hudebních cen Anděl, není zvyklá stagnovat a opakovat se. Stal se z ní mimořádný úkaz české hudební scény, kdy z pozice rockové a popové hvězdy putuje k osobnímu vyjádření, jež svobodně přijímá impulzy z nejrůznějších stylů a mimohudebních zážitků."
    />
    <meta name="pinterest" content="nopin" />
    <meta property="og:image" content="/static/graphics/og.jpg" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#56a6bd"
    />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-config"
      content="/static/favicon/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    <link rel="stylesheet" href="https://cdn.plyr.io/3.5.2/plyr.css"></link>
  </Head>
);

export default HeadComponent;
