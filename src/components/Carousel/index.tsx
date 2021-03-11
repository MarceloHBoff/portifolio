import CarouselComponent from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

interface Card {
  image: string
  url: string
}

interface CarouselProps {
  cards: Card[]
}

const Carousel = ({ cards }: CarouselProps) => {
  return (
    <CarouselComponent>
      {cards.map(card => (
        <img key={card.image} src={card.image} />
      ))}
    </CarouselComponent>
  )
}

export default Carousel
