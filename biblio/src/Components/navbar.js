import './css/navbar.css';
export function NavBar() {
    return (
        <nav class="navbar navbar-dark bg-dark ">
            <div class="container-fluid justify-content-between ">
              <a class="navbar-brand" href="/">
                <img src="../ressources/img/logo.png" width="30" height="24" class="d-inline-block align-text-top"/>
                Bibliothèque Cuvat
              </a>
              <div class="links d-flex p-1 align-items-center">
                <li class="nav-link dropdown p-2 m-1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Prêts</a>
                    <ul class="dropdown-menu bg-dark">
                      <li><a class="dropdown-item" href="pret/mes_prets.html">Mes prêts</a></li>
                      <li><a class="dropdown-item" href="pret/reservation.html">Réservation</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item" href="pret/rente.html">Prévoir une rente</a></li>
                    </ul>
                </li>
                <li class="nav-link dropdown p-2 m-1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mon compte</a>
                    <ul class="dropdown-menu bg-dark">
                      <li><a class="dropdown-item" href="account/profile.html">Profil</a></li>
                      <li><a class="dropdown-item" href="account/forme.html">Pour moi</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item" href="account/change.html">Changer de compte</a></li>
                      <li><a class="dropdown-item" href="account/disconnect.html">Déconnexion</a></li>
                    </ul>
                </li>
                <li class="nav-link p-2 m-1">
                    <a href="consultation.html" class="nav-link">Consultation</a>
                </li>  
                <li class="nav-link p-2 m-1">
                    <a href="search.html" class="nav-link">Chercher un livre</a>
                </li>
              </div>
            </div>
        </nav>
    )
}