import { IUser} from './models/user'

export interface Error {
    status?: number,
    message?:string

}

export type UsersPaginationType = {
    allUsers: IUser[]
    totalPage: number
    currentPage: number
  }