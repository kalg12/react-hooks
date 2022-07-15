import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const Carousel = () => {
  return (
    <>
        <UncontrolledCarousel dark={false} interval={8000}
  items={[
    {
      altText: 'Imagen 1',
      caption: 'Piedras del río',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 />
    </>
  )
}

export default Carousel