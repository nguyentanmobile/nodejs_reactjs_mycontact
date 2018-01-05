export default class ApiContact{
    static getContact(action){
        const timeout = 1000;
        return new Promise(resolve =>{
            setTimeout(()=>{
                let contact = {
                    data:null,
                    err:null
                };
                resolve(contact);
            });
        },timeout);
    }
}