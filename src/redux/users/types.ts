export type User = {
    email: string;
    id: string;
}

export enum UsersConstants {
    LOAD_USER = "USER/LOAD_USER",
}

export type UsersState = {
    user: User
}