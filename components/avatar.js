import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Link href="/">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
<<<<<<< HEAD
        src={'./static/logo-inverted.png'}
=======
        src="/static/logo-inverted.png"
>>>>>>> c97361940dc48b2b0a8e7a7151ebe70e467efd9c
        alt="AngelHacks avatar"
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'primary',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
