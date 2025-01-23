import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Red Dead Redemption </h1>
      {/* Lien vers la page des animaux légendaires */}
      <NavLink
        to="/legendary-animals"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Animaux Légendaires
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Bande de Dutch 
      </NavLink>

      <NavLink
        to="/other-gangs"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
          Les autres bandes
      </NavLink>

      <NavLink
        to="/State-of-Red-dead-Redemption"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
          Les états de Red Dead Redemption
      </NavLink>

      <NavLink
        to="/City-of-Red-dead-Redemption"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
          Les villes de Red Dead Redemption
      </NavLink>

      
    </header>
  );
}

export default Header;
