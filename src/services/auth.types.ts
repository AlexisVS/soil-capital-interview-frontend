export interface LoginRequestI {
    email: string;
    password: string;
}

export interface TokenPayloadI {
    access?: string[];
}
