const edit_people_reducer = (state ="", action) => {
    switch (action.type) {
        case 'showText':
            console.log("》44444444444444444444")
            console.log(state)
            return action.text
        default :
            return state;
    }
}
export default edit_people_reducer;
