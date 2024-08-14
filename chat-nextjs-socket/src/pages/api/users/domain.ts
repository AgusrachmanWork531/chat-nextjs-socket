

export type AuthPayload = { userName: string, password: string };

export type AuthResponse = {
    fullName: string;
    hobby: string;
    jobTitle: string;
    password: string;
    userName: string;
}

export type User = {
    fullName: string;
    hobby: string;
    jobTitle: string;
}

export type ResponseAPI = {
    data: AuthResponse;
    message: string;
    statusCode: number;
}