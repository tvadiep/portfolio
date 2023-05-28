import Head from 'next/head'

const MetaData = () => {
  return (
    <Head>
      <title>Diep Tran | Web Developer | Freelancer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='Software engineer with a passion for creative problem solving.'
      />
      <meta
        name='keywords'
        content='Diep, creative developer, strong developer, javascript developer'
      />

      <meta property='og:title' content='Diep | Web Developer | Freelancer' />
      <meta
        property='og:description'
        content='Software engineer with a passion for creative problem solving.'
      />
      <meta property='og:url' content='https://dieptr-portfolio.vercel.app/' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/portfolio.png?alt=media&token=54cc45b0-178a-4a30-bb2a-69956648d3ba'
      />
    </Head>
  )
}

export { MetaData }
