import { IUser } from "../types"

export function useUser(): { user: IUser } {
  const user: IUser = {
    id: "hello-world-123456789!@#$%^&*()_-_+",
    username: "Данил"
  }
  
  return { user }
}