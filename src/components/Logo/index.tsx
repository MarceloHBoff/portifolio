import { useMemo } from 'react'
import theme from 'styles/theme'

import { Container } from './styles'

export type LogoProps = {
  id?: string
  size?: 'small' | 'normal'
}

export default function Logo({ id = 'logo', size = 'normal' }: LogoProps) {
  const width = useMemo(() => (size === 'normal' ? 32 : 19), [size])
  const height = useMemo(() => (size === 'normal' ? 5 : 3), [size])

  return (
    <Container style={{ width: `${width}rem`, height: `${height}rem` }}>
      <svg
        width={width * 10}
        height={height * 10}
        viewBox="0 0 191 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Marcelo Boff"
      >
        <line
          x1="1.5"
          y1="-1.5"
          x2="15.9049"
          y2="-1.5"
          transform="matrix(-0.820372 0.571831 -0.724971 -0.68878 189 12.9131)"
          stroke={`url(#paint_${id}_radial)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="1.5"
          y1="-1.5"
          x2="15.9049"
          y2="-1.5"
          transform="matrix(0.820372 0.571831 0.724971 -0.68878 2 12.9131)"
          stroke={`url(#paint_${id}_radial)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="1.5"
          y1="-1.5"
          x2="15.7477"
          y2="-1.5"
          transform="matrix(0.82398 0.566619 -0.720294 0.693669 174.788 4.83337)"
          stroke={`url(#paint_${id}_radial)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="1.5"
          y1="-1.5"
          x2="15.7477"
          y2="-1.5"
          transform="matrix(-0.82398 0.566619 0.720294 0.693669 16.2124 4.83337)"
          stroke={`url(#paint_${id}_radial)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.7867 5.9375L40.3649 19.8594L45.943 5.9375H48.861V23H46.611V16.3555L46.8219 9.18359L41.2203 23H39.4977L33.9078 9.21875L34.1305 16.3555V23H31.8805V5.9375H34.7867ZM60.3219 23C60.1969 22.75 60.0953 22.3047 60.0172 21.6641C59.0094 22.7109 57.8063 23.2344 56.4078 23.2344C55.1578 23.2344 54.1305 22.8828 53.3258 22.1797C52.5289 21.4688 52.1305 20.5703 52.1305 19.4844C52.1305 18.1641 52.6305 17.1406 53.6305 16.4141C54.6383 15.6797 56.0524 15.3125 57.8727 15.3125H59.982V14.3164C59.982 13.5586 59.7555 12.957 59.3024 12.5117C58.8492 12.0586 58.1813 11.832 57.2985 11.832C56.525 11.832 55.8766 12.0273 55.3531 12.418C54.8297 12.8086 54.568 13.2812 54.568 13.8359H52.3883C52.3883 13.2031 52.611 12.5938 53.0563 12.0078C53.5094 11.4141 54.1188 10.9453 54.8844 10.6016C55.6578 10.2578 56.5055 10.0859 57.4274 10.0859C58.8883 10.0859 60.0328 10.4531 60.861 11.1875C61.6891 11.9141 62.1188 12.918 62.15 14.1992V20.0352C62.15 21.1992 62.2985 22.125 62.5953 22.8125V23H60.3219ZM56.7242 21.3477C57.4039 21.3477 58.0485 21.1719 58.6578 20.8203C59.2672 20.4688 59.7086 20.0117 59.982 19.4492V16.8477H58.2828C55.6266 16.8477 54.2985 17.625 54.2985 19.1797C54.2985 19.8594 54.525 20.3906 54.9781 20.7734C55.4313 21.1562 56.0133 21.3477 56.7242 21.3477ZM71.6774 12.2656C71.3492 12.2109 70.9938 12.1836 70.611 12.1836C69.1891 12.1836 68.2242 12.7891 67.7164 14V23H65.5485V10.3203H67.6578L67.693 11.7852C68.4039 10.6523 69.4117 10.0859 70.7164 10.0859C71.1383 10.0859 71.4586 10.1406 71.6774 10.25V12.2656ZM78.5328 21.4648C79.3063 21.4648 79.982 21.2305 80.5602 20.7617C81.1383 20.293 81.4586 19.707 81.5211 19.0039H83.5719C83.5328 19.7305 83.2828 20.4219 82.8219 21.0781C82.361 21.7344 81.7438 22.2578 80.9703 22.6484C80.2047 23.0391 79.3922 23.2344 78.5328 23.2344C76.8063 23.2344 75.4313 22.6602 74.4078 21.5117C73.3922 20.3555 72.8844 18.7773 72.8844 16.7773V16.4141C72.8844 15.1797 73.111 14.082 73.5641 13.1211C74.0172 12.1602 74.6656 11.4141 75.5094 10.8828C76.361 10.3516 77.3649 10.0859 78.5211 10.0859C79.943 10.0859 81.1227 10.5117 82.0602 11.3633C83.0055 12.2148 83.5094 13.3203 83.5719 14.6797H81.5211C81.4586 13.8594 81.1461 13.1875 80.5836 12.6641C80.0289 12.1328 79.3414 11.8672 78.5211 11.8672C77.4195 11.8672 76.5641 12.2656 75.9547 13.0625C75.3531 13.8516 75.0524 14.9961 75.0524 16.4961V16.9062C75.0524 18.3672 75.3531 19.4922 75.9547 20.2812C76.5563 21.0703 77.4156 21.4648 78.5328 21.4648ZM91.2711 23.2344C89.5524 23.2344 88.1539 22.6719 87.0758 21.5469C85.9977 20.4141 85.4586 18.9023 85.4586 17.0117V16.6133C85.4586 15.3555 85.6969 14.2344 86.1735 13.25C86.6578 12.2578 87.3297 11.4844 88.1891 10.9297C89.0563 10.3672 89.9938 10.0859 91.0016 10.0859C92.65 10.0859 93.9313 10.6289 94.8453 11.7148C95.7594 12.8008 96.2164 14.3555 96.2164 16.3789V17.2812H87.6266C87.6578 18.5312 88.0211 19.543 88.7164 20.3164C89.4195 21.082 90.3102 21.4648 91.3883 21.4648C92.1539 21.4648 92.8024 21.3086 93.3336 20.9961C93.8649 20.6836 94.3297 20.2695 94.7281 19.7539L96.0524 20.7852C94.9899 22.418 93.3961 23.2344 91.2711 23.2344ZM91.0016 11.8672C90.1266 11.8672 89.3922 12.1875 88.7985 12.8281C88.2047 13.4609 87.8375 14.3516 87.6969 15.5H94.0485V15.3359C93.986 14.2344 93.6891 13.3828 93.1578 12.7812C92.6266 12.1719 91.9078 11.8672 91.0016 11.8672ZM101.091 23H98.9235V5H101.091V23ZM103.998 16.543C103.998 15.3008 104.24 14.1836 104.724 13.1914C105.216 12.1992 105.896 11.4336 106.763 10.8945C107.638 10.3555 108.634 10.0859 109.752 10.0859C111.478 10.0859 112.873 10.6836 113.935 11.8789C115.005 13.0742 115.541 14.6641 115.541 16.6484V16.8008C115.541 18.0352 115.302 19.1445 114.826 20.1289C114.357 21.1055 113.681 21.8672 112.798 22.4141C111.923 22.9609 110.916 23.2344 109.775 23.2344C108.056 23.2344 106.662 22.6367 105.591 21.4414C104.529 20.2461 103.998 18.6641 103.998 16.6953V16.543ZM106.177 16.8008C106.177 18.207 106.502 19.3359 107.15 20.1875C107.806 21.0391 108.681 21.4648 109.775 21.4648C110.877 21.4648 111.752 21.0352 112.4 20.1758C113.048 19.3086 113.373 18.0977 113.373 16.543C113.373 15.1523 113.041 14.0273 112.377 13.168C111.72 12.3008 110.845 11.8672 109.752 11.8672C108.681 11.8672 107.818 12.293 107.162 13.1445C106.505 13.9961 106.177 15.2148 106.177 16.8008ZM124.552 23V5.9375H130.13C131.982 5.9375 133.373 6.32031 134.302 7.08594C135.24 7.85156 135.709 8.98438 135.709 10.4844C135.709 11.2812 135.482 11.9883 135.029 12.6055C134.576 13.2148 133.959 13.6875 133.177 14.0234C134.099 14.2812 134.826 14.7734 135.357 15.5C135.896 16.2188 136.166 17.0781 136.166 18.0781C136.166 19.6094 135.67 20.8125 134.677 21.6875C133.685 22.5625 132.283 23 130.47 23H124.552ZM126.802 15.0195V21.1602H130.517C131.564 21.1602 132.388 20.8906 132.99 20.3516C133.599 19.8047 133.904 19.0547 133.904 18.1016C133.904 16.0469 132.787 15.0195 130.552 15.0195H126.802ZM126.802 13.2148H130.201C131.185 13.2148 131.97 12.9688 132.556 12.4766C133.15 11.9844 133.447 11.3164 133.447 10.4727C133.447 9.53516 133.173 8.85547 132.627 8.43359C132.08 8.00391 131.248 7.78906 130.13 7.78906H126.802V13.2148ZM138.591 16.543C138.591 15.3008 138.834 14.1836 139.318 13.1914C139.81 12.1992 140.49 11.4336 141.357 10.8945C142.232 10.3555 143.228 10.0859 144.345 10.0859C146.072 10.0859 147.466 10.6836 148.529 11.8789C149.599 13.0742 150.134 14.6641 150.134 16.6484V16.8008C150.134 18.0352 149.896 19.1445 149.42 20.1289C148.951 21.1055 148.275 21.8672 147.392 22.4141C146.517 22.9609 145.509 23.2344 144.369 23.2344C142.65 23.2344 141.255 22.6367 140.185 21.4414C139.123 20.2461 138.591 18.6641 138.591 16.6953V16.543ZM140.771 16.8008C140.771 18.207 141.095 19.3359 141.744 20.1875C142.4 21.0391 143.275 21.4648 144.369 21.4648C145.47 21.4648 146.345 21.0352 146.994 20.1758C147.642 19.3086 147.966 18.0977 147.966 16.543C147.966 15.1523 147.634 14.0273 146.97 13.168C146.314 12.3008 145.439 11.8672 144.345 11.8672C143.275 11.8672 142.412 12.293 141.755 13.1445C141.099 13.9961 140.771 15.2148 140.771 16.8008ZM153.92 23V11.9961H151.916V10.3203H153.92V9.01953C153.92 7.66016 154.283 6.60937 155.009 5.86719C155.736 5.125 156.763 4.75391 158.091 4.75391C158.591 4.75391 159.088 4.82031 159.58 4.95312L159.463 6.71094C159.095 6.64062 158.705 6.60547 158.291 6.60547C157.588 6.60547 157.045 6.8125 156.662 7.22656C156.279 7.63281 156.088 8.21875 156.088 8.98438V10.3203H158.795V11.9961H156.088V23H153.92ZM162.263 23V11.9961H160.259V10.3203H162.263V9.01953C162.263 7.66016 162.627 6.60937 163.353 5.86719C164.08 5.125 165.107 4.75391 166.435 4.75391C166.935 4.75391 167.431 4.82031 167.923 4.95312L167.806 6.71094C167.439 6.64062 167.048 6.60547 166.634 6.60547C165.931 6.60547 165.388 6.8125 165.005 7.22656C164.623 7.63281 164.431 8.21875 164.431 8.98438V10.3203H167.138V11.9961H164.431V23H162.263Z"
          fill={`url(#paint_${id}_radial)`}
        />
        <line
          x1="1.5"
          y1="-1.5"
          x2="20.1892"
          y2="-1.5"
          transform="matrix(0.296436 -0.955053 0.952417 0.304797 19 24.8572)"
          stroke={`url(#paint_${id}_radial)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.70246 0.5) rotate(90) scale(0.5 8.70246)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.70246 0.5) rotate(90) scale(0.5 8.70246)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.62384 0.5) rotate(90) scale(0.5 8.62384)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.62384 0.5) rotate(90) scale(0.5 8.62384)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98.9 14.5) rotate(90) scale(14.5 70.38)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
          <radialGradient
            id={`paint_${id}_radial`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.8446 0.5) rotate(90) scale(0.5 10.8446)"
          >
            <stop stopColor={theme.colors.primary} />
            <stop offset="1" stopColor={theme.colors.primaryDark} />
          </radialGradient>
        </defs>
      </svg>
    </Container>
  )
}
