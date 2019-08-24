import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://angelhacks.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/logo-inverted.png"
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
