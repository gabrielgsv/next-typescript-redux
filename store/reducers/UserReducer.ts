import { USER } from "../actions/UserAction"

export default (state = [], action: USER) => {

  const { type, name, email } = action
  
  switch (type) {
    case "ADD_USER":
      return [...state, { name, email }]
    default:
      return state
  }
}