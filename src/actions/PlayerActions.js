export const playerCreated = (name) => {
    return {
        type: PLAYER_CREATED,
        payload: name
    };
};