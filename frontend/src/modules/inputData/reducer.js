const init = {
    inputData: "",
    result: ""
};

const inputData = (state = init, action) => {
switch (action.type) {
    case 'INPUT_CHANGED': {
    return Object.assign({}, state, {
        inputData: action.payload
    });
    }
    case 'UPDATE_OUTPUT': {
    return Object.assign({}, state, {
        result: action.payload
    });
    }      
    default: {
    return Object.assign({}, state);
    }
}
};

export default inputData;
