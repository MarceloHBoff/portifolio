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
}

export default function Slider({ children, ...rest }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickSlider {...settings} {...rest}>
        {children}
        {/* <div>
        <h3 style={{ backgroundColor: '#fff' }}>1</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: '#000' }}>2</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: '#ccc' }}>3</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: '#222' }}>4</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: '#123132' }}>5</h3>
      </div>
      <div>
        <h3 style={{ backgroundColor: '#456789' }}>6</h3>
      </div> */}
      </SlickSlider>
    </S.Wrapper>
  )
}
