import {ADD_PLAYER, DROP_PLAYER, PLAYER_CREATED, PLAYER_DELETED} from "../actions/types";
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {
    playerList: [],
    roster: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.playerList || [];
        case PLAYER_CREATED:
            const newPlayer = {
                name: action.payload,
                wins: 0,
                losses: 0,
                bestScore: null,
                worstScore: null
            };
            return {
                playerList: state.playerList.push(newPlayer),
                roster: state.roster.push(newPlayer)
            };
        case PLAYER_DELETED:
            const playerListIndex = state.playerList.find(player => {
               return player.id = action.payload;
            });
            const rosterIndex = state.roster.find(player => {
                return player.id = action.payload;
            });
            return {
                playerList: state.playerList.splice(playerListIndex, 1),
                roster: state.roster.splice(rosterIndex, 1),
            };
        case DROP_PLAYER:
            const rosterIndex = state.roster.find(player => {
                return player.id = action.payload;
            });
            return {
                ...state,
                roster: state.roster.splice(rosterIndex, 1),
            };
        case ADD_PLAYER:
            return {
                ...state,
                roster: state.roster.push(newPlayer)
            };
        default:
            return state;
    }
}