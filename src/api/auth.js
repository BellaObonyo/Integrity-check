import { get, post, put } from './utils';


export async function loginApi(data) {
    return post(`/auth/login`, data);
}

export async function registerApi(data) {
    return post(`/auth/signup`, data);
}

export async function forgotPasswordApi(email) {
    return post(`/public/um/mfa/email/send?email=${encodeURIComponent(email)}`);
}

export async function resetPasswordApi(data) {
    return put(`/auth/resetpassword`, data);
}

export async function changePasswordApi(data) {
    return put(`/auth/me/changePassword`, data);
}

export async function sendEmailForMFA(email) {
    return post(`/public/um/mfa/email/send?email=${encodeURIComponent(email)}`);
}