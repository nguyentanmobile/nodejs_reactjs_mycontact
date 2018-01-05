import React from "react";
import {connect} from "react-redux";
class Header extends React.Component{
    constructor(props){
        super(props);
        if(this.props.contact==null){
            console.log("null");
        }else{
            console.log("not null");
        }        
    }
    render(){
        return(
            <header>
                
            </header>
        );
    }
}

function mapStateToProp(state){
    return({
        contact:state.contact || null
    })
}
export default connect(mapStateToProp)(Header);