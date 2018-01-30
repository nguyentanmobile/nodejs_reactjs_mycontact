import http from 'http';
import { setInterval } from 'timers';
export default class ApiUserContent{
    static getContent(action){        
        const timeout = 1000;
        return new Promise(resolve =>{
            setTimeout(()=>{                
                let data = {
                    userContent:null,
                    error:null
                };
                fetch("http://localhost:8081/user/listuserapi").then(response=>response.json()).then(resjson=>{
                  
                if(resjson.error==null){                                                  
                    data.userContent=resjson.userContent;                      
                }else{
                    data.error = resjson.error;
                }
               
                resolve(data);
                });
                
                //or
                /*$.ajax({
                    type:"GET",
                    url:"http://localhost:8081/api/user",
                    data:"",
                    success:function(data){
                        resolve(contact);
                        console.log("data"+data);
                    }
                })*/
                //or
                /*var option = {
                    host:'localhost',
                    port:'8081',
                    path:'/api/user'
                }
                var callback = function(res){
                    var body;
                    res.on('data',function(data){
                        body=data;
                    });
                    res.on('end',function(){
                        console.log(JSON.parse(body));
                    })
                }
                var req = http.request(option,callback);
                req.end();
                */
            });
        },timeout);
    }
    static getLogin(action){        
        const timeout=1000;        
        return new Promise(resolve=>{
            setTimeout(()=>{
                let data = {
                    userContent:null,
                    error:null
                };
                
            fetch("http://localhost:8081/user/login", {
                method: 'POST',
                body:JSON.stringify(action.data), 
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
              }).then(response=>response.json()).then(resjson=>{
                 
                if(resjson.error==null ){
                    if(resjson.userContent!=null){                                                  
                        data.userContent=resjson.userContent;
                    }                   
                }else{
                    data.error = resjson.error;
                }               
                resolve(data);
                });

            },timeout)
        });
    }
    static startSignup(action){
        const timeout = 1000;
        let data = {
            userContent:null,
            error:null
        };
        return new Promise(resolve=>{
            setTimeout(()=>{
               
                fetch("http://localhost:8081/user/adduser",{
                    method:"POST",
                    body: action.data
                }).then(response=>response.json()).then(resjson=>{
                    
                    if(resjson.error==null ){
                        if(resjson.userContent!=null){                                                  
                            data.userContent=resjson.userContent;
                        }                   
                    }else{
                        data.error = resjson.error;
                    }                                  
                    resolve(data);
                    });
            },timeout);
        })
    }
    static startUpdate(action){
        const timeout = 1000;
        let data = {
            userContent:null,
            error:null
        };
        return new Promise(resolve=>{
            setTimeout(()=>{
               
                fetch("http://localhost:8081/user/update",{
                    method:"POST",
                    body: action.data
                }).then(response=>response.json()).then(resjson=>{
                    
                    if(resjson.error==null ){
                        if(resjson.userContent!=null){                                                  
                            data.userContent=resjson.userContent;
                        }                   
                    }else{
                        data.error = resjson.error;
                    }                                                    
                    resolve(data);
                    });
            },timeout);
        })
    }
}