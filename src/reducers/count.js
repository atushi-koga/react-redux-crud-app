import {INCREMENT, DECREMENT} from "../actions";

const initialState = {value: 0};

// Reducers
// actionとstateから新たなstateを作成し、返す
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {value: state.value + 1};

        case DECREMENT:
            return {value: state.value - 1};

        default:
            return state;
    }
}