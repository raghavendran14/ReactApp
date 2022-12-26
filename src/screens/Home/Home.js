import React,{useRef} from "react";
import {withRouter,useHistory,useNavigate,Link,useLocation} from "react-router-dom";
import {Layout,Affix,Typography,Button} from "antd";
const{Title,Text} = Typography;




const HomePreLogin = (props)=>{
    console.log("INside HomePreLogin ++",props)
    const navigate = useNavigate(); // similar to history.push() 
    const location = useLocation();
    console.log("++ LOcation Inside Home++", location)  
return(
    <div style={{backgroundColor:"gray",height:"100px",
    alignItems:"center",flex:"display",justifyContent:"center"}}>
        <div style={{height:"100px",
    alignItems:"center",flex:"display",justifyContent:"center"}}>
            <Text> Hekko </Text>
        </div>

        <div>
        <Link to="/signup">About</Link>
            <Button 
            onClick={()=>{
                console.log("INside Button")    
                navigate("/signup",{
                    state:"hi"
                });
                
                // navigate("/")
            }}
            >
                SignUp
            </Button>

        </div>
        
    </div>
);
}

export default HomePreLogin