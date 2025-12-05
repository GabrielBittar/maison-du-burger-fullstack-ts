import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login">Se Connecter</Link>
      <Link to="/Register">S'inscrire</Link>
    </div>
  );
};
export default Home;
