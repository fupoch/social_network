let initialState = {
  friends: [
    { id: 1, name: "Liza" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Max" },
  ],
};

const sitebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default sitebarReducer;
