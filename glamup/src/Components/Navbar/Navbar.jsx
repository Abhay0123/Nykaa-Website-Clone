import style from "./Navbar.module.css"
import { SearchIcon} from "@chakra-ui/icons";
import {ButtonGroup,Button, Box, Text, Tooltip} from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FiUserCheck } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { getSignOut } from "../../Redux/Authentication/Action";
import { DrawerCart } from "../../Products/DrawerCart";




const Navbar =({handleChange})=>{

  const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
  const userName = useSelector((store)=>store.AuthReducer.userName);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(getSignOut());
    }).catch((error) => {
      console.log(error)
    });  
    navigate(0)
  }
  const cartNumber = useSelector(store=> {
    return  (store.productReducer.cartData)
 });

    return (
       < Box fontSize={['8px','10px','12px','16px']}>
     
      <Box className={style.container} >
      
      <Box className={style.firstsubContainer}> 
      <Box  style={{width:"35%", border:"0px solid red" , height:"100%", background:"#ff7db0", display:"flex", justifyContent:"center" , alignItems:"center" ,fontWeight:"500" , fontStyle:'xx-large'}} >
      <marquee  width="100%" direction="up" behavior='sliding' scrollamount="5" scrolldelay='200'>BEAUTY BONANZA Get Your Daily Dose of Amazing Deals</marquee>
      </Box>
      <Box  className={style.topLeft}   style={{width:"35%", border:"0px solid red" , height:"100%", background:"white;", display:"flex" }} >  
        <Box><p>Get App</p></Box>
        <Box><p>Store & Events</p></Box>
        <Box><p>Gift Card</p></Box>
        <Box><p>Help</p></Box>
      </Box>
      
       </Box>
            <Box className={style.Card}>
          <Box >
            <Link to="/"  >
            <img
              style={{cursor:"pointer" ,width:"90px" , height:"37px" }}
             
              src="https://i.ibb.co/1XYt2t1/glamup-2-1.png"
              className={style.card4}
              alt="nykka"
            />
            </Link>
           
           <Link to="/" className={style.pTags} ><p>Categories</p></Link>
           <Link to="/luxe" className={style.pTags} ><p>Luxe</p></Link>
           <Link to="/" className={style.pTags} ><p>Brands</p></Link>           
           <Link to="/" className={style.pTags} ><p>Cosmetic+ Fashion</p></Link>
           <Link to="/" className={style.pTags} ><p>Beauty Advice</p></Link>
            
          </Box>
          <Box>
            <Box className={style.inputContainer}>
            <Box style={{height:"30px" , background:"#f4f4f4", width:"30px" , borderRadius:"4px"}} >
            <SearchIcon />
            </Box>
              <input
              
                style={{position: "relative",height:"30px"}}
                type="text"
                className={style.input}
                placeholder="Search on Cosmetic+"
              />
            </Box>
            <Box className={style.card2}>
              
            <ButtonGroup gap='2'>
           {
            isAuth?<Tooltip label="Click to Log Out !" aria-label='A tooltip' bg='pink.400'><Button onClick={handleLogOut} colorScheme='pink' variant='ghost' ><FiUserCheck/><Text marginLeft="10px" fontSize="17px">{userName}</Text></Button></Tooltip>:<Link to={"/login"}><Button colorScheme='pink'>Log In</Button></Link> 
           }
           <Link to={"/cart"}></Link>
             <Box display='flex'> <DrawerCart/>{cartNumber.length!=0?<Text className={style.cartNumber}>{cartNumber.length}</Text>:""}</Box>
          </ButtonGroup>
            </Box>
            <Box className={style.card3}>
            </Box>
          </Box>
        </Box>

        <Box className={style.content}>
          
        </Box>
      </Box>
  
      </ Box>
        
    )
}

export default Navbar;