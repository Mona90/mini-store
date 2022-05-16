import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Content, Section } from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight} from '@fortawesome/free-solid-svg-icons'

function Slider() {
    const slideData =[
        {
            image:"/images/slider/slide-1.jpg",
            subtitle:"Bedroom Furniture",
            title:"Find Comfort That Suits You.",
            price:""
        },
        {
            image:"/images/slider/slide-2.jpg",
            subtitle:"Deals and Promotions",
            title:"Ypperlig Coffee Table",
            price:"49,99"

        },
        {
            image:"/images/slider/slide-3.jpg",
            subtitle:"Living Room",
            title:"Make Your Living Room Work For You.",
            price:"9,99"
        }
    ]

    const slideContent = ()=>{
        return(
            <>
            {slideData.map((slide,i)=>(
                <Content key={i} style={{backgroundImage:`url(${slide.image})`}}>
                    <div className='container'>
                        <p className='mb-0'>{slide.subtitle}</p>
                        <h1 className='title'>{slide.title}</h1>
                        {slide.price !== '' ? (
                            <div className='price'>$<sub>{slide.price}</sub></div>
                        ): null}
                        <Link to="/" className='shop-now'><span className='me-2'>Shop Now</span><FontAwesomeIcon icon={faLongArrowRight}/></Link>
                    </div>
                </Content>
            ))}
            </>
        )
    }
  return (
      <Section>
        <OwlCarousel className='owl-theme' loop margin={10} dots items={1}>
            {slideContent()}
        </OwlCarousel>
      </Section>
  )
}

export default Slider