import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}