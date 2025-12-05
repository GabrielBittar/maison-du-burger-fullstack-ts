import { use, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import Login from "./Login";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [postalCode, setPostalCode] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          placeholder="Nom et prénom"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Mot de passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Confirmation du mot de passe"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Code postal"
          type="text"
          onChange={(e) => setPostalCode(e.target.value)}
        ></Input>
        <Button title="S'inscrire" />
        <Link to="/login" className="w-full">
          <Button title="J'ai déjà un compte" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
