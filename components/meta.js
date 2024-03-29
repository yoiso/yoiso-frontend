import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * { box-sizing: border-box; margin: 0; padding: 0 }

      body {
        background: #e5eef4;
      }
    `}</style>
  </div>
)
