export interface USER {
  type: any,
  name: string,
  email: string
}

export function addUser(user: USER) {
  return {
    type: "ADD_USER",
    name: user.name,
    email: user.email
  }
}