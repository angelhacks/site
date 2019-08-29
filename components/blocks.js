import { Box } from 'rebass'

export const Banner = props => (
  <Box
    sx={{
      bg: 'bannerBG',
      color: 'bannerColor',
      py: [4, 5],
      mb: [4, 5]
    }}
  >
    <Box
      {...props}
      variant="container"
      sx={{
        maxWidth: 'narrow',
        textAlign: 'center',
        h1: {
          fontSize: [5, 6, 7],
          fontWeight: 'bold',
          lineHeight: 'tight',
          textShadow: '0 0 5px currentColor',
          mb: 3
        },
        h2: {
          color: 'bannerColorAlt',
          fontSize: [3, 4, 5],
          lineHeight: 'heading',
          fontWeight: 'medium',
          mb: 2
        },
        p: {
          color: 'bannerColorAlt',
          fontWeight: 'medium',
          fontSize: 2
        },
        li: {
          mr: 3
        }
      }}
    />
  </Box>
)

export const Container = ({ width = 'container', ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: width,
      'h2, h3, strong': {
        fontWeight: 'bold'
      },
      h2: {
        fontSize: [4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [3, 4],
        mt: [3, 4],
        mb: [2, 3]
      },
      p: {
        fontSize: [1, 2]
      },
      a: {
        color: 'primary',
        fontWeight: 'medium'
      },
      mark: {
        color: 'inherit',
        bg: 'primaryWash'
      },
      ...props.sx
    }}
  />
)

export const Callout = props => (
  <Box
    {...props}
    sx={{
      bg: 'cards',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      fontSize: [2, 3],
      mb: [4, 5],
      ...props.sx,
      iframe: {
        borderRadius: 'extra'
      }
    }}
  />
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)

export const FAQ = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: [null, '1fr 1fr'],
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      li: {
        fontSize: [1, null, 2]
      },
      p: { my: 0 },
      strong: {
        display: 'block',
        fontSize: 2
      },
      ...props.sx
    }}
  />
)

export const Gallery = props => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', null, 'repeat(2, 1fr)'],
      gridGap: [3, 4, null, 5],
      width: '100%',
      px: [3, 4, null, 5],
      mt: [3, 4, 5],
      mb: [3, 4, 5, 6],
      'p, li': {
        fontSize: 2
      },
      '> div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bg: 'primaryWash'
      },
      h2: {
        fontSize: [3, 4],
        fontWeight: 'bold',
        my: 0
      },
      ...props.sx
    }}
  />
)

export const Team = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'flex',
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-of-type': {
          lineHeight: 0
        }
      },
      strong: {
        fontSize: [1, 2],
        fontWeight: 'medium'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: 'primary'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        width: [64, 72],
        height: [64, 72],
        objectFit: 'cover',
        objectPosition: 'center',
        mr: 3
      },
      ...props.sx
    }}
  />
)

export const Header = ({ width = 'container', sx, ...props }) => (
  <Box
    {...props}
    sx={{
      bg: 'alt',
      color: 'white',
      py: [3, 4, null, 5],
      mb: [4, null, 5],
      h1: {
        fontSize: [5, 6],
        fontWeight: 'bold',
        my: 0
      },
      'h1 + h2': {
        fontWeight: 'medium',
        fontSize: [2, 3],
        my: 0
      },
      ...sx
    }}
  >
    <Box variant="container" width={width} {...props} />
  </Box>
)

export const Schedule = props => (
  <Box
    {...props}
    variant="container"
    sx={{
      columnCount: [null, 2],
      columnGap: [null, 3],
      columnFill: [null, 'balance'],
      h2: {
        fontSize: [4, 5],
        my: 0
      },
      ul: {
        listStyle: 'none',
        pl: 0,
        strong: {
          display: 'block'
        }
      },
      li: {
        fontSize: [2, 3],
        mb: 2
      }
    }}
  />
)
