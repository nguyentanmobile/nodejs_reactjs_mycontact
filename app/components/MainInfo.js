import React from 'react';
import {connect} from 'react-redux';
class MainInfo extends React.Component{
    constructor(props){
        super(props);
            
    }

    render(){        
        var user = this.props.userContent.content;        
        return(
            <main className="wrapper">
                    <div className="content iform">
                        <div className="row">
                            <label className="colleft">Full name</label>
                            <span>:</span>
                            <label className="colright" id="fullname">{user.fullname}</label>                            
                        </div>
                        <div className="row">
                            <label className="colleft">Email</label>
                            <span>:</span>
                            <label className="colright" id="email">{user.email}</label>                            
                        </div>
                        <div className="row">
                            <label className="colleft">Phone</label>
                            <span>:</span>
                            <label className="colright" id="phone">{user.phone}</label>                            
                        </div>
                        <div className="row">
                            <label className="colleft">Info</label>
                            <span>:</span>
                            <div className="colright finfo" id="info">{user.info}</div>                            
                        </div>
                        <div className="row">
                            <button  type="buton" onClick={this.update.bind(this)}>Update </button>
                        </div>
                    </div>
                </main>
        );
    }

    update(){
        this.props.dispatch({
            type:"contact.update"
        })
    }
}
function mapStateToProp(state){     
    return({
        userContent:state.userContent
    })
}
export default connect(mapStateToProp)(MainInfo);