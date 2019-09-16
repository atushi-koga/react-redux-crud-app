import _ from 'lodash';
import {READ_EVENTS} from "../actions";

// Reducers
// actionとstateから新たなstateを作成し、返す
export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');

        default:
            return events;
    }
}