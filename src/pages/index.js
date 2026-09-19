import React from 'react'
import Head from 'next/head'

import Header from '@/components/Header/Header'
import HomePageComponent from '@/components/HomePage/HomePage'

const Home = () => {
  const siteUrl = 'https://shreyansmehta.vercel.app'

  return (
    <>
      <Head>
        <title>Dev Portfolio — Shreyans Mehta</title>

        <meta
          name="description"
          content="Shreyans Mehta's developer portfolio showcasing projects, skills, and experience."
        />

        {/* Open Graph / LinkedIn */}
        <meta
          property="og:title"
          content="Dev Portfolio — Shreyans Mehta"
        />

        <meta
          property="og:description"
          content="Shreyans Mehta's developer portfolio showcasing projects, skills, and experience."
        />

        <meta
          property="og:url"
          content={siteUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Shreyans Mehta — Portfolio"
        />

        <meta
          property="og:image"
          content={`${siteUrl}/api/og`}
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Dev Portfolio — Shreyans Mehta"
        />

        <meta
          name="twitter:description"
          content="Shreyans Mehta's developer portfolio showcasing projects, skills, and experience."
        />

        <meta
          name="twitter:image"
          content={`${siteUrl}/api/og`}
        />

        <link rel="canonical" href={siteUrl} />
      </Head>

      <Header />
      <HomePageComponent />
    </>
  )
}

export default Home
