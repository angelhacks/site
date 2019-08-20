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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'Windy City Hacks',
          startDate: '2019-06-22T12:00',
          endDate: '2019-06-23T12:00',
          description:
            'Register today for 24 hours of coding, fun, free food, and prizes. Windy City Hacks returns June 22, 2019.',
          isAccessibleForFree: true,
          url: 'https://windyhacks.com',
          image: 'https://windyhacks.com/flag-alt-teal.png',
          location: {
            '@type': 'Place',
            name: 'Origami Risk',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Chicago',
              addressRegion: 'IL',
              postalCode: '60601',
              streetAddress: '222 N LaSalle St #2125'
            }
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://windyhacks.com',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2019-04-01',
            validThrough: '2019-06-22'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Windy City Hacks Team'
          }
        })
      }}
    />
  </Head>
)
