import axiosInstance, { URI } from "./service";

interface ISignInProps {
  email: string;
  password: string;
}

class AuthService {
  signIn({ email, password }: ISignInProps) {
    axiosInstance.post(URI.auth.signIn);
  }
}

export default new AuthService();
