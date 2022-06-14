const initialState = {
  users: []
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case "fetchUsers":
      return [...action.payload];
    default:
      return [...state];
  }
}

export const { fetchUsers } = userReducer;
