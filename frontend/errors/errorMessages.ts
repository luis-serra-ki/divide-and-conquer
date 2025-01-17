interface ErrorsI {
  [idx: string]: string;
}

const ErrorMessages: ErrorsI = {
  DEFAULT: "An error occurred. Please check your internet connection.",
  EMAIL_EXISTS: "Registration failed. This email is already registered. Please try to login",
  INVALID_CREDENTIALS: "Login failed. Please, make sure you entered the right credentials",
  USER_NOT_FOUND: "Login failed. Please, make sure you are already registered",
};

export const errorCodes = (message: string): number =>
  Number(message.slice(message.length - 3, message.length));

export default ErrorMessages;
