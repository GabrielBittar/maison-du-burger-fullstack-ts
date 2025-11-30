import Input from "./components/Input";

const App = () => {
  return (
    <p className="flex gap-2 bg-black p-6">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Mot de passe" type="password" />
    </p>
  );
};

export default App;
