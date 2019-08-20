import Head from 'next/head'

export default ({
  title = 'AngelHacks – PA’s largest high school hackathon',
  description = 'November 2019, 111 hackers came together for Pennsylvania’s largest high school hackathon ever.',
  image = 'https://2019.hackpenn.com/card.png',
  url = 'https://angelhacks.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AngelHacks" />
    <meta name="twitter:site" content="@angelhacks" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'hackpenn',
        url: 'https://hackpenn.com',
        logo: 'https://2019.hackpenn.com/flag.png',
        sameAs: [
          'https://twitter.com/hackpenn',
          'https://www.instagram.com/angelhacks.la',
          'https://www.facebook.com/hackpenn'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'contact@hackpenn.com',
            contactType: 'customer support',
            url: 'https://hackpenn.com'
          }
        ]
      })}}
    />
  </Head>
)

