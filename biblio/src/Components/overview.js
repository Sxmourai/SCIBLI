import './css/general.css';
import './css/overview.css';
import bootstrap from 'bootstrap';

export function Overview() {
  return (
    <div class="container row-cols-2 overview d-flex mt-5 border-dark shadow rounded">
        <h1 class="title text-4xl p-2">Accueil</h1>
        <div class="prets">
          <div class="lastPret"></div>
          <div class="speedPret"></div>
        </div>
        <div class="analytics"></div>
    </div>
  )
}