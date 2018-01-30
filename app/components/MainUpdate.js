import React from 'react';
import {connect} from 'react-redux';
class MainUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userid:"",
            password:"",
            imageurl:"",
            fullname:"",
            email:"",
            phone:"",
            info:"" 
        }          
    }

    render(){ 
        var user={} ;      
        if(this.props.updating){
            $("#updateUpdating").css("visibility","visible");
            user = this.state;
        }else{
            $("#updateUpdating").css("visibility","hidden");     
            user = this.props.userContent.content;        
        }
         
            
            return(                
                <main className="wrapper">
                    <div className="update iform" >
                        <h2>Update  Data</h2>
                        <form name="updatef" onSubmit={this.submitUpdates.bind(this)} >                            
                            <div className="row">
                                <label className="colleft">User id</label>
                                <span>:</span>
                                <input className="colright" type="text" defaultValue={user.userid} name="userid" placeholder="Enter your id"/>
                            </div>
                            <div className="row">
                                <label className="colleft">Password</label>
                                <span>:</span>
                                <input className="colright" type="password" defaultValue={user.password} placeholder="Enter your password" name="password" />
                            </div>
                            <div className="row">
                                <label className="colleft">Your image</label>
                                <span>:</span>
                                <input className="colright"  type="file" name="pic" accept="image/*"  />                                
                            </div>
                            <div className="row">
                                <label className="colleft">Full name</label>
                                <span>:</span>
                                <input className="colright" type="text" defaultValue={user.fullname} name="fullname" placeholder="Enter your full name" />
                            </div>
                            <div className="row">
                                <label className="colleft">Email</label>
                                <span>:</span>
                                <input className="colright" type="email" defaultValue={user.email} name="email" placeholder="Enter your email" />
                            </div>
                            <div className="row">
                                <label className="colleft">Phone number</label>
                                <span>:</span>
                                <input className="colright" type="tel" defaultValue={user.phone} name="phone"  />
                            </div>
                            <div className="row">
                                <label className="colleft">Detail</label>
                                <span>:</span>                                
                                <textarea className="colright" defaultValue={user.info} name="info" cols="20" rows="20"></textarea>
                            </div>                            
                            <div className="row">                                
                                <button  type="submit">Save</button>
                                <button  type="button" onClick={this.backMain.bind(this)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                    <div className="loading iload"  id="updateUpdating" >
                            <p>Updating...</p>
                    </div>
                </main>
               
            );
    }
    submitUpdates(e){   
     
       var targetData = new FormData(e.target); 
       this.setState({
        userid:targetData.get("userid"),
        password:targetData.get("password"),
        imageurl:targetData.get("imageurl"),
        fullname:targetData.get("fullname"),
        email:targetData.get("email"),
        phone:targetData.get("phone"),
        info:targetData.get("info") 
        })     
        this.props.dispatch({
            type:"startUpdate",
            data:targetData
        })
        
        e.preventDefault();
        return false;
    }
    
    backMain(e){
        this.props.dispatch({
            type:"contact.backMain"
        });
    }
}
function mapStateToProp(state){
        
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(MainUpdate);