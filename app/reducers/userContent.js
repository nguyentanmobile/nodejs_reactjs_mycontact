export default function userContent(state={},action){
    //action.data là object duoc gửi thông qua action từ contentSaga
    /*let data = {
        userContent:null,
        error:null
    };*/
    let new_state={
        isData:false,
        isLogin:false,
        isLoading:false,
        isSignuping:false,
        isSignup:false,
        isUpdate:false,
        content:null, //chính là object user table trong mongodb
        error:null        
    };
   
    switch(action.type){        
        case "getLogin":
            new_state.isLoading=true;
            return new_state;
        case "startSignup":            
            new_state.isSignuping = true;              
            return new_state;        
        case "contact.getcontactSuccess": 
            if(action.data.error==null){
                if(action.data.userContent==null){
                    new_state.isLogin = true;                                                           
                }else{                                       
                    new_state.isData = true;                                        
                    new_state.content = action.data.userContent;
                }
            }else{ 
                new_state.isLogin = true;
                new_state.error = action.data.error;
            }
            new_state.isLoading=false; 
            new_state.isSignuping = false;                          
            return new_state;
        case "contact.getcontactError":         
            new_state.isLogin = true;
            new_state.isLoading=false;
            new_state.error = action.data.error;
            return new_state;        
        case "contact.backMain":
            new_state = JSON.parse(JSON.stringify(state));           
            new_state.isSignup =false;
            new_state.isLogin = true;                        
            new_state.error ="Login system or Signup";
            return new_state;
        case "contact.login":
            new_state = JSON.parse(JSON.stringify(state));
            new_state.isData = false;
            new_state.isLogin = true;
            new_state.isSignup =false;
            new_state.isUpdate = false;
            new_state.error =null;
            return new_state;
        case "contact.signup":            
            new_state = JSON.parse(JSON.stringify(state));
            new_state.isData = false;
            new_state.isLogin = false;
            new_state.isSignup = true;
            new_state.isUpdate = false;
            new_state.error ="Can't not login";            
            return new_state;
        case "contact.update":       
            new_state = JSON.parse(JSON.stringify(state));
            new_state.isData = false;
            new_state.isLogin = false;
            new_state.isSignup = false;
            new_state.isUpdate = true;
            new_state.error =null;
            return new_state;
        default:        
            return new_state;
    }
}