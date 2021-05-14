import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

const settings: Settings = {
  dots: true,
  infinite: false,
  nextArrow: <FaArrowRight color="#fff" />,
  prevArrow: <FaArrowLeft color="#fff" />
}

type SliderProps = Settings & {
  children: React.ReactNode
  dotsColor?: string
}

export default function Slider({ children, dotsColor, ...rest }: SliderProps) {
  return (
    <S.Wrapper dotsColor={dotsColor}>
      <SlickSlider {...settings} {...rest}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}
