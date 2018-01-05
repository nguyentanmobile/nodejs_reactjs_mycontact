import React from "react";
import {connect} from 'react-redux';
class Main extends React.Component{
    constructor(props){
        super(props);        
    }
    render(){
        return(
            <main>
                
            </main>
        );
    }
}
function mapStateToProp(state){
    return({
        contact:state.contact || null
    })
}
export default connect(mapStateToProp)(Main);