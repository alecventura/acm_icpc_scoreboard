// Will control loading here
const init = {
    loading: false
};

const main = (state = init, action) => {
switch (action.type) {
    case 'ENABLE_LOADING': {
    return Object.assign({}, state, {
        loading: true
    });
    }
    case 'DISABLE_LOADING': {
    return Object.assign({}, state, {
        loading: false
    });
    }      
    default: {
    return Object.assign({}, state);
    }
}
};

export default main;
