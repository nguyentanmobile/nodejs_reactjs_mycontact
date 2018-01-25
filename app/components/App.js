import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import NotFound404 from './NotFound404';
import {connect} from "react-redux";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstTime:true
        }
        if(this.props.userContent.content==null){
            this.props.dispatch({type:"getContent"});
            console.log("call dispatch");
                        
        }
        
    }
    componentDidUpdate(){
        if(this.state.firstTime){
            this.setState({
                firstTime:false
            })
        }
    }
    render(){
                     
        if(this.props.userContent.content!=null || this.props.userContent.error!=null || this.props.userContent.isLoading ||this.props.userContent.isSignuping){                   
            
            return(
                <div>                    
                    <Header />
                    <Main/>
                    <Footer/>
                </div>
            );
        }else{          
            if(!this.state.firstTime){                
                return(
                    <div>
                        <NotFound404/>
                    </div>
                );
            }else{
                return(
                    <div>
                        404
                    </div>
                );
            }
        }
    }
}

function mapStateToProp(state){     
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(App);