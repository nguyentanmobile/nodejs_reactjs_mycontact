import React from "react";
import {connect} from "react-redux";
class Header extends React.Component{
    constructor(props){
        super(props);        
    }
    render(){
             
        if(this.props.userContent.isData){
            var image;
            var fullname;
            if(this.props.userContent.content.user!=null){
                var user = this.props.userContent.content;            
                image = "http://localhost:8081"+user.imageurl;
                fullname= user.fullname
            }else{
                image = "assets/images/header_user.jpg";
                fullname="..."
            }

            return(
                <header>
                    <h1 className="hidden">my contact</h1>
                    <div className="wrapper" id="imageuser">
                        <img src={image} alt="image"/>
                        <p>{fullname}</p>
                    </div>
                </header>
            );
        }else{
            return(
                <header>
                    <h1 className="hidden">my contact</h1>
                    <div className="wrapper" id="imageuser">
                        <img src="assets/images/header_user.jpg" alt="image"/>
                        <p>...</p>
                    </div>
                </header>
            );
        }
    }
}


function mapStateToProp(state){
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(Header);