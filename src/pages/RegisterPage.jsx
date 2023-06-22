import { CompleteRegister } from "../components/CompleteRegister";
import useAuth from "../hooks/useAuth";

export function RegisterPage() {
  const { userAuth } = useAuth({
    feedbacks: "/feedback/all",
    register: "/register",
    login: "/",
  });
  return <CompleteRegister userAuth={userAuth} />;
}
