//import logo from './favicon.ico';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Is Loading</h1>
  }
  return (

    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Header />
      <Footer />
    </div>

  );
}

export default App;
