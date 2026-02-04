export const categoryAdd = (value) => {
  return { type: "CATEGORY_ADD", payload: value };
}

export const deleteOrder = (id) => {
  return { type: "DELETE_ORDER", payload: id };
}
