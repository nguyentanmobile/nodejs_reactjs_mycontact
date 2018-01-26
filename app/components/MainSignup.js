import React from 'react';
import {connect} from 'react-redux';
class MainSignup extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            valueTextArea:"",
            imagePreviewURL:"",
            file:""
        }     
    }
    handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = ()=>{
            this.setState({
                file:file,
                imagePreviewURL:reader.result
            })
        }
        reader.readAsDataURL(file);
    }
    render(){
        let $imagePreview = null;
        if(this.state.imagePreviewURL){
            $imagePreview = (<img src={this.state.imagePreviewURL}/>);
        }        
        if(this.props.signuping){
            $("#signupSignuping").css("visibility","visible");
        }else{
            $("#signupSignuping").css("visibility","hidden");
             
        }
        return(            
                <main className="wrapper">
                    <div className="signup iform" >
                        <h2>Signup</h2>
                        <form name="signupf" onSubmit={this.submit.bind(this)}  >                            
                            <div className="row">
                                <label className="colleft">User id</label>
                                <span>:</span>
                                <input className="colright" type="text" name="userid" placeholder="Enter your id" required/>
                            </div>
                            <div className="row">
                                <label className="colleft">Password</label>
                                <span>:</span>
                                <input className="colright" type="password"  placeholder="Enter your password" name="password" required/>
                            </div>
                            <div className="row">
                                <label className="colleft">Your image</label>
                                <span>:</span>
                                <div className="colright" >
                                    <input type="file" name="pic" accept="image/*"  required onChange={this.handleImageChange.bind(this)}/>
                                    {$imagePreview}                                 
                                </div>
                            </div>
                            <div className="row">
                                <label className="colleft">Full name</label>
                                <span>:</span>
                                <input className="colright" type="text"  name="fullname" placeholder="Enter your full name" required/>
                            </div>
                            <div className="row">
                                <label className="colleft">Email</label>
                                <span>:</span>
                                <input className="colright" type="email"  name="email" placeholder="Enter your email" required/>
                            </div>
                            <div className="row">
                                <label className="colleft">Phone number</label>
                                <span>:</span>
                                <input className="colright" type="tel"  name="phone" required />
                            </div>
                            <div className="row">
                                <label className="colleft">Detail</label>
                                <span>:</span>                                
                                <textarea className="colright" value={this.state.valueTextArea} onChange={this.handleChangeArea.bind(this)} name="info" col="20"></textarea>
                            </div>                            
                            <div className="row">                                
                            <button  type="submit">Sign Up</button>
                            <button  type="button" onClick={this.backMain.bind(this)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                    <div className="loading iload"  id="signupSignuping" >
                            <p>Signup...</p>
                    </div>
                </main>
           
        );
    }
    submit(e){
        var targetData = new FormData(e.target); 
        console.log(targetData)
            //nên sử dụng react-image để load hình         
        this.props.dispatch({
            type:"startSignup",
            data:targetData
            /*data:{
                username:targetData.get("userid"),
                password:targetData.get("password"),
                imageurl:targetData.get("pic"),
                fullname:targetData.get("fullname"),
                email:targetData.get("email"),
                phone:targetData.get("phone"),
                info:targetData.get("info")
            }*/
        })

        e.preventDefault();
        return false;
    }
    handleChangeArea(e){
        this.setState({
            valueTextArea:e.target.value
        })
    }
    backMain(e){
        this.props.dispatch({
            type:"contact.backMain"
        })
    }
}
function mapStateToProp(state){     
    return({
        contact:state.contact
    })
}
export default connect(mapStateToProp)(MainSignup);