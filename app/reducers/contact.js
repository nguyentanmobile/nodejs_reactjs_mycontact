export default function contact(state={},action){
    let new_state={};
    switch(action.type){
        case "contact.getcontactSuccess":
            new_state.data = action.data;
        return new_state;
        case "contact.getcontactError":
            new_state.error = action.messageError;
        return new_state;
        default:
            return null;
    }
}