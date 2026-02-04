export const deleteUser = (id) => {
    return { type: "DELETE_USER", payload: id };
};

export const changeStatus = (id) => {
    return { type: "CHANGE_STATUS", payload: id };
};
