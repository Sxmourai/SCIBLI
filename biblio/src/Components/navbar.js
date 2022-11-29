import './css/general.css';
import './css/navbar.css';
export function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid justify-content-between ">
              <a className="navbar-brand" href="/">
                <img src="../ressources/img/logo.png" width="30" height="24" className="d-inline-block align-text-top"/>
                Bibliothèque Cuvat
              </a>
              <div className="links d-flex p-1 align-items-center">
                <li className="nav-link dropdown p-2 m-1">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Prêts</a>
                    <ul className="dropdown-menu bg-dark">
                      <li><a className="dropdown-item" href="pret/mes_prets.html">Mes prêts</a></li>
                      <li><a className="dropdown-item" href="pret/reservation.html">Réservation</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="pret/rente.html">Prévoir une rente</a></li>
                    </ul>
                </li>
                <li className="nav-link dropdown p-2 m-1">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mon compte</a>
                    <ul className="dropdown-menu bg-dark">
                      <li><a className="dropdown-item" href="account/profile.html">Profil</a></li>
                      <li><a className="dropdown-item" href="account/forme.html">Pour moi</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="account/change.html">Changer de compte</a></li>
                      <li><a className="dropdown-item" href="account/disconnect.html">Déconnexion</a></li>
                    </ul>
                </li>
                <li className="nav-link p-2 m-1">
                    <a href="consultation.html" className="nav-link">Consultation</a>
                </li>  
                <li className="nav-link p-2 m-1">
                    <a href="search.html" className="nav-link">Chercher un livre</a>
                </li>
              </div>
            </div>
        </nav>
    )
}