import { use, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, postalCode }),
      });

      switch (response.status) {
        case 409:
          setError("Email déjà enregistré");
          break;
        case 400:
          setError("Toutes les informations sont requises");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setPostalCode("");
          setError("");
          break;
        case 500:
          setError("Une erreur est survenue. Veuillez réessayer plus tard");
          break;
        default:
          setError("");
          break;
      }
      console.log(response);
    } catch (error) {
      console.log(error);
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
        <Input
          value={name}
          placeholder="Nom et prénom"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          placeholder="Mot de passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          value={confirmPassword}
          placeholder="Confirmation du mot de passe"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Input
          value={postalCode}
          placeholder="Code postal"
          type="text"
          onChange={(e) => setPostalCode(e.target.value)}
        ></Input>
        <p className="font-bold text-red-500">{error}</p>
        <div className="mt-2 flex w-full flex-col gap-2">
          <Button title="S'inscrire" type="submit" />
          <Link to="/login" className="w-full">
            <Button title="J'ai déjà un compte" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
