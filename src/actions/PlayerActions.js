import {PLAYER_CREATED} from "./types";

export const createPlayer = (name) => {
    return {
        type: PLAYER_CREATED,
        payload: name
    };
};

// export const employeeCreate = ({ name }) => {
//     // Save new person to local storage.
//
//     return (dispatch) => {
//         /*
//         {
//         id: 1,
//         name: name,
//         wins: 2,
//         losses: 1,
//         bestScore: 10500,
//         worstScore: 5400
//         },
//          */
//     };
// };