import React from 'react'
import '../pages/footer.css'
import '../pages/Navbar.css'
import {Text,HStack}from '@chakra-ui/react'


export const Footer = () => {
  return (
    <div className='footer-page'>

        <div className='footer-container'>

            <div style={{display:'flex',width:'50%',justifyContent:'space-between'}}>
              <div >
                <Text style={{fontWeight:'bold'}} fontSize='xs'>ONLINE SHOPPING</Text>
                 <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home & Living</li>
                    <li>Beauty</li>
                    <li>Gift Cards</li>
                    <li>Myntra Insider</li>
                 </ul>

                 <Text style={{fontWeight:'bold',marginTop:'20px'}} fontSize='xs'>USEFUL LINKS</Text>
                 <ul>
                    <li> Blog</li>
                    <li>Careers</li>
                    <li>Site Map</li>
                    <li>Corporate Information</li>
                    <li>Whitehat</li>
                  
                 </ul>
                
              </div>
              <div>
              <Text style={{fontWeight:'bold'}} fontSize='xs'>CUSTOMER POLICIES</Text>
                 <ul>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms Of Use</li>
                    <li>Track Orders</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>Returns</li>
                    <li>Privacy policy</li>
                    <li>Grievance Officer</li>
                 </ul>
              </div>
              <div>
              <Text style={{fontWeight:'bold'}} fontSize='xs'>EXPERIENCE MYNTRA APP ON MOBILE</Text>
                <img src='https://tse2.mm.bing.net/th?id=OIP.VxnW9Vh3706lbXesYUvePwHaC3&pid=Api&P=0' width='200px' alt='error'/>
                <img style={{height:'61px'}} src='https://tse2.mm.bing.net/th?id=OIP.GBDQMgvI_aNNqzgcJjTfoAHaCm&pid=Api&P=0'  width='200px' alt='error'/>
                <Text style={{fontWeight:'bold',marginTop:'25px'}} fontSize='xs'>KEEP IN TOUCH</Text>

                 <HStack style={{marginTop:'10px'}}>
                 <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' width='25px' alt='error'/>
                 <img src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' width='25px' alt='error'/>
                 <img src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png'width='25px' alt='error'/>
                 <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' width='25px' alt='error'/>
                 </HStack>
              </div>
            </div>


            <div style={{width:'400px',marginLeft:'100px'}}>
                <HStack style={{width:'300px'}}>
                    <img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' width='60px' alt='error'/>
                     <Text fontSize='md'> <span style={{fontWeight:'bold'}}>100% ORIGINAL</span>guarantee for all products at myntra.com</Text>
                </HStack>
                <HStack style={{width:'300px'}}>
                    <img src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' width='60px' alt='error'/>
                     <Text fontSize='md'> <span style={{fontWeight:'bold'}}>Return within 30days</span>Receiving your order</Text>
                </HStack>
                 
            </div>

        </div>
        <div className='footer-end'>
        <Text style={{fontWeight:'bold',marginTop:'15px',marginBottom:'15px'}} fontSize='xs'>POPULAR SEARCHES</Text>
        <p style={{color:'grey'}} >Punjabi | Suits | Anarkali | Lingeire | Rakhi | 2020 | Wedges | Jacket | For | Women | Bra | Leggings 
             Kanjeevaram | Saree | Dupattas | Anklet | Jeggings | Panties | Image  |  Samsung | Real Madrid | 
              Saree | Dresses | Palazzo Pants | Shrugs  Lehangas | Kurtas | Earrings | Bikini | Women Sweaters | 
              Swimwear | Nightwear | Nail Polish | Halter Bra | Dungarees | Georgette Saree | Watches | Makeup  
             | Necklace | Sharara | Hot Pant | Cotton Salwar Suit | Rompers | Nightdresses | Skirts | Stockings 
              | Women Shirts | Eyeliner | Lipstick | Bangles  Designer Blouses | Tops  One Piece Dresses | Gowns </p>

              <p style={{marginTop:'20px'}}>In case of any concern,<span style={{fontWeight:'bold'}}>Contact Us</span></p>
        </div>
    </div>
  )
}