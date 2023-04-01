
import Slider from "react-slick";
import { categories } from "../data/Allcategoryimage";
import {Box,Image} from '@chakra-ui/react'
import '../pages/Navbar.css'

export default function  PauseOnHover(){

    var settings = {
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div >
        <Slider {...settings}>
           {categories?.map((item)=>{
           return <Box >
                <Image  src={item.image} alt='categories' />
             </Box>
           })}
        </Slider>
      </div>
    );
  }
