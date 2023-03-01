import { Box, Button, Heading, Input, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const FootArr = [
    {
        head : "Nykaa",
        arr : ["Who are we?","Careers","Authenticity","Press","Testimonials","Nykaa CSR","Responsible Disclosure","Investor Relations"]
    },
    {
        head :  "Help" ,
        arr :  [
            "Contact Us","Frequently asked questions","Store Locator","Cancellation & Return","Shipping & Delivery","Sell on Nykaa"
        ],
    },
    {
        head : "Top Categories",
        arr :  [
            "Makeup","Skin","Hair","Bath & Body","Appliances","Mom and Baby","Wellness","Fragrance","Natural","Luxe"
        ]
    },
    {
        head : "Quick Links",
        arr :  [
            "Offer Zone","New Launches","Nykaa Man","Nykaa Fashion","Nykaa Pro"
        ]
    } ,
    {
        head : "Inspire Me",
        arr : [
            "Beauty Book","Nykaa TV","Nykaa Network","Buying Guides"
        ]
    },
]
const FootMid = [
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
        head : "Free Shipping",
        para : "On Orders Above ₹299"
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
        head : "Easy Returns",
        para : "15-Day Return Policy "
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
        head : "100% Authentic",
        para : "Products Sourced Directly"
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
        head : "1900+ Brands",
        para : "1.2 Lakh+ Products"
    },
]

const Footer = () =>{
  

    return (
      <Box w='100%'  margin='auto' fontSize={['xs','sm','sm','sm']}>
        <SimpleGrid
          bg="#3f414d"w='100%'
          color='white'
          columns={{base:1,sm:2,md:3,lg:3}}
           p='10px'
        >


          <Box gap={"8px"} padding="30px">
            <Heading as="h2" size="14px">
              <EmailIcon /> Get special discount on your inbox
            </Heading>
            <Box gap="8px" display={"flex"}>
              <Input
                border="0px"
                borderBottom="1px solid"
                borderRadius="0px"
                
                color="white"
                placeholder="Your Email"
                _placeholder={{ color: "white" }}
               
                type="email"
              />
              <Button
               
                w="100px"
                variant="outline"
                _hover={{
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                Send
              </Button>
            </Box>
          </Box>


          
          <Box gap={"8px"} display="flex"  w='100%'>
            <PhoneIcon />
            <Box gap="8px">
              <Heading as="h2" size="14px">
                {" "}
                experience the nykaa mobile app
              </Heading>
              <Image
                m="auto"
                borderRadius={"10px"}
                w="150px"
                src="https://i.pinimg.com/564x/25/60/bb/2560bbc828e28e3bede2f9023458b89e.jpg"
                alt="GooglePlay"
              />
              <Image
                m="auto"
                borderRadius={"10px"}
                bg="blue"
                w="150px"
                src="https://i.pinimg.com/564x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg"
                alt="AppStore"
              />
            </Box>
          </Box>



          <Box gap={"8px"} display="flex" >
            <PhoneIcon />
            <Box>
              <Heading as="h2" size="14px">
                {" "}
                for any help, you may call us at <br />
                <span> </span>1800-267-4444
              </Heading>
              <Heading as="h2" size="12px">
                (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
              </Heading>
            </Box>
          </Box>
        </SimpleGrid>


       
        <SimpleGrid  w='100%'  columns={{base:3,sm:3,md:5,lg:5}}
          bg="#8c8d94"
          textAlign='left'
          padding='10px'
          className='footer-hover'
          
        >
          {FootArr.map((item, index) => {
            return (
              <Box key={index} margin='auto' h='100%' color='white'>
                <Heading as="h2" size="14px" mb='10px'>
                  {item.head}
                </Heading>

                {item.arr.map((el, i) => {
                  return <h1  key={i}>{el}</h1>;
                })}
              </Box>
            );
          })}
        </SimpleGrid>{" "}
      
        <SimpleGrid 
            w='100%'
            margin='auto'
            columns={[4]}
            p='20px'
        >
          {FootMid.map((el, i) => {
          
            return (
              <SimpleGrid
             
               display={['grid','flex']}
                key={i}
                gap="20px"
              >
                <Box margin={"auto"}>
                  <Image w="47px" src={el.img} alt="Image" />
                </Box>
                <SimpleGrid columns={{base:1,sm:2,md:3,lg:3}}>
                  <Heading as="h2" size="14px">
                    {el.head}
                  </Heading>
                  <Text size={"10px"}>{el.para}</Text>
                </SimpleGrid>
              </SimpleGrid>
            );
          })}
        </SimpleGrid>
        <SimpleGrid
          bg="#3f414d"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          
        </SimpleGrid>
        <SimpleGrid bg="#fc2779" padding="30px" color='white'>
          <SimpleGrid display={['grid','flex']} w='max-content' margin={'auto'}>
            <h1>Terms & Conditions</h1>
            <h1>Shipping Policy</h1>
            <h1>Cancellation Policy</h1>
            <h1>Privacy Policy</h1>
          </SimpleGrid>
          <Text margin={"auto"} fontSize="sm">
            © 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.
          </Text>
        </SimpleGrid>
      </Box>
    );
}

export default Footer;