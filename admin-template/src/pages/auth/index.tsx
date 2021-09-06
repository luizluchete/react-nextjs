import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";

const Auth = () => {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  return (
    <div className="flex flex-col">
      <h1>Autenticação</h1>
      <AuthInput
        label="email"
        type="email"
        value={email}
        callBackValue={setEmail}
        required
      />
      <AuthInput
        label="Senha"
        type="password"
        value={passwd}
        callBackValue={setPasswd}
        required
      />
    </div>
  );
};

export default Auth;
