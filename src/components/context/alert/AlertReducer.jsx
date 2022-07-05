const AlertReducer = (state , action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload.msg
        case 'RESET' :
            return null
        default:
            return state
    }
}

export default AlertReducer