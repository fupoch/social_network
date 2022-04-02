
type FriendsType = {
  id: number 
  name: string
}

type InitialStateType = typeof initialState
let initialState = {
  friends: [
    { id: 1, name: "Liza" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Max" },
  ] as Array<FriendsType>,
};

const sitebarReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

type ActionsType = {}
export default sitebarReducer;
