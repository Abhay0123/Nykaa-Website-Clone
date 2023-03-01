import {Box,HStack,} from "@chakra-ui/react"
import styled from "@emotion/styled"
import style from "./Navbar.module.css"
import MenuBar from "./MenuBar"
import { Link } from "react-router-dom"
const SubNavbar = ()=>{
    const Styles = {color:"#718096",fontFamily:"sans-serif" }
    return (
        <Box fontSize={['8px','10px','12px','16px']} w="100%" border="0px solid red" className={style.SubNavbar} boxShadow='md' >
          <hr />
        <HStack  className={styled.SubNavbar} paddingLeft="60px"  paddingRight="60px" spacing='20px' justify="space-around" alignItems="center" display="flex" paddingTop="5px" paddingBottom="5px">
          
          <Box class={style.dropdown}>
          <Link to={"/makeup"}>
          <Box style={Styles} w='100%' h='30px' bg='#ffffff' class={style.dropbtn} >Makeup</Box>
          </Link>
          <MenuBar />
            </Box>
            <Box class={style.dropdown}>
           <Link to={"/skin"}><Box style={Styles}w='100%' h='30px' bg='#ffffff' >Skin</Box></Link>
           <MenuBar />
           </Box>
           <Box class={style.dropdown}>
            <Link to={"/hair"}><Box style={Styles}w='100%' h='30px' bg='#ffffff' >Hair</Box></Link>
            <MenuBar />
            </Box>
            <Box class={style.dropdown}>
             <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Appliances</Box>
             <MenuBar />
             </Box>
             <Box class={style.dropdown}>
              <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Bath & Body</Box>
              <MenuBar />
              </Box>
              <Box class={style.dropdown}>
               <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Natural</Box>
               <MenuBar />
               </Box>
               <Box class={style.dropdown}>
                <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Baby</Box>
                <MenuBar />
                </Box>
                <Box class={style.dropdown}>
                 <Box style={Styles} w='100%' h="30px" bg='#ffffff' >Health</Box>
                 <MenuBar />
                 </Box>
                 <Box class={style.dropdown}>
                  <Box style={Styles} w='100%' h='30px' bg='#ffffff' >Fragrance</Box>
                  <MenuBar />
                  </Box>
                  <Box class={style.dropdown}>
                    <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Pop Ups</Box>
                    <MenuBar />
                    </Box>
                    
                    
        </HStack>
      </Box>
    )
}

export default SubNavbar;