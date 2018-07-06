let initState = {
    testData: []
}

export default function test(state = initState, action) {
    switch (action.type) {
        case 'SAVE_REDUCER':
            return {
                ...state,
                testData: action.data
            }

        default:
            return state;
    }
}