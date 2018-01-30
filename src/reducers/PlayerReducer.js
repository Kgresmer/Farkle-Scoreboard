import {PLAYER_CREATED} from "../actions/types";
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {
    name: '',
    wins: 0,
    losses: 0,
    bestScore: null,
    worstScore: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.playerList || [];
        case PLAYER_CREATED:
            return {...state, name: action.payload};
        default:
            return state;
    }
}