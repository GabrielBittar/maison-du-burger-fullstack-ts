import { use, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./provisory-logo.png" alt="" className="mb-4" />
        </Link>
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Mot de Passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Se Connecter" type="submit" variant="default" />
        <Link to="/register" className="w-full">
          <Button title="Créer un compte" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
