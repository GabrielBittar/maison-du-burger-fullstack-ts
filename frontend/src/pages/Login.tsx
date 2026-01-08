import { use, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import type { UserInterface } from "../types/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserInterface | null>(null);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    try {
      if (!email || !password) {
        setError("Nom d'utilisateur et mot de passe requis");
        return;
      }

      switch (response.status) {
        case 200:
          setError("");
          const data = await response.json();
          navigate("/");
          setUser(data);
          break;
        case 400:
          setError("Nom d'utilisateur et mot de passe requis");
          break;
        case 401:
          setError("Identifiants invalides");
          break;
        case 404:
          setError("Aucun utilisateur trouvé");
          break;
        case 500:
          setError("Une erreur est survenue. Veuillez réessayer plus tard");
          break;
        default:
          setError("Une erreur est survenue. Veuillez réessayer plus tard");
          break;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./provisory-logo.png" alt="" className="mx-auto mb-4" />
        </Link>
        <div className="mb-3 flex flex-col gap-2">
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Mot de Passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>
        <Button
          title="Se Connecter"
          type="submit"
          variant="default"
          className="mt-4"
        />
        <Link to="/register" className="w-full">
          <Button title="Créer un compte" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
