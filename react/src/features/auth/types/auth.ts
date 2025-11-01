// ユーザー情報
export type UserType = {
    id: number;
    name: string;
    email: string;
};

// ログイン／登録のレスポンス
export type AuthType = {
    token: string;
    user: UserType;
};

// ログインリクエスト
export type LoginRequest = {
    email: string;
    password: string;
};

// 登録リクエスト
export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};
