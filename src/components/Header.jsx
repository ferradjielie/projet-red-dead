import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Red Dead Redemption</h1>
      {/* Lien vers la page des animaux légendaires */}
      <NavLink
        to="/legendary-animals"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Animaux Légendaires
      </NavLink>
    </header>
  );
}

export default Header;
