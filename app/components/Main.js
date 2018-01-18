import React from "react";
import {connect} from 'react-redux';
import MainInfo from "./MainInfo";
import MainSignup from "./MainSignup";
import MainUpdate from "./MainUpdate";
import MainLogin from "./MainLogin"
class Main extends React.Component{
    constructor(props){
        super(props);              
    }
    render(){  
        console.log(this.props.userContent) 
        if(this.props.userContent.isLoading){
            return(
                <div>
                   <MainLogin loading="loading"/>
                </div>
            );
        }else if(this.props.userContent.isData){
            var user = this.props.userContent.content;
            return(
                <div>
                    <MainInfo/>
                </div>
            );
        }else if(this.props.userContent.isLogin){
            return(
                <div>
                   <MainLogin/>
                </div>
            );
        }else if(this.props.userContent.isSignup){
            return(
                <div>
                    <MainSignup/>
                </div>    
            );
        }else if(this.props.userContent.isUpdate){
            return(
                <div>
                    <MainUpdate/>
                </div>
            )
        }
        
    }
}
function mapStateToProp(state){
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(Main);