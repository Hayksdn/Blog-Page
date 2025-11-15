export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  username: string;
  email: string;
  password: string;
};

export type User = LoginFormData;
