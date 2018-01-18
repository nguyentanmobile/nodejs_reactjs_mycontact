import React from 'react';
import {connect} from 'react-redux';
class MainLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messageError:""
        }        
    }
   
    render(){ 
        
        if(this.props.loading){
            $("#loginLoading").css("visibility","visible");
        }else{
            $("#loginLoading").css("visibility","hidden");
             
        }
        
        return(

                 <main className="wrapper">
                    
                    <div className="login iform" >
                        <h2>Login</h2>
                        <form name="loginf " onSubmit={this.submit.bind(this)}>                            
                            <div className="row">
                                <label className="colleft">User name</label>
                                <span>:</span>
                                <input className="colright" type="text" name="username" required/>
                            </div>
                            <div className="row">
                                <label className="colleft">Password</label>
                                <span>:</span>
                                <input className="colright" type="password" name="password" required/>
                            </div>
                            <div className="row" >
                                <button  type="submit">Login </button>
                                <button  type="buton" onClick={this.signup.bind(this)}>Sign Up </button>                                 
                            </div>
                        </form>
                        <div className="row">
                            <p className="messageError">{this.props.userContent.error}</p>
                        </div>
                    </div>
                    <div className="loading iload"  id="loginLoading" >
                            <p>Loading...</p>
                    </div>
                </main>           
        );
    }
    submit(e){
        e.preventDefault();
        var targetData = new FormData(e.target);
               
        this.props.dispatch({
            type:"getLogin",
            
            data:{
                "username":targetData.get("username"),
                "password":targetData.get("password")
            }
        })
        
        return false;
    }
    signup(e){
        e.preventDefault();
        this.props.dispatch({
            type:"contact.signup"
        })
        
        
    }
}
function mapStateToProp(state){ 
        
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(MainLogin);