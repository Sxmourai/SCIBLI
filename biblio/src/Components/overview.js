import './css/general.css';
import './css/overview.css';
import bootstrap from 'bootstrap';

function LastPret() {
  return (
    <div className="lastpret col">

    </div>
  )
}
function SpeedPret() {
  return (
    <div className="speedpret col">
      <form action="#" className="mb-3">
        <input type="text" className="form-control" />
      </form>
    </div>
  )
}
function Analytics() {
  return (
    <div className="analytics row container">
      <div className="col">
        <h2>183</h2>
      </div>
      <div className="col">
        <h3>183</h3>
      </div>
      <div className="col">
        <h2>183</h2>
      </div>
    </div>
  )
}

export function Overview() {
  return (
    <div class="container overview mt-5 border-dark shadow rounded">
        {/* <h1 class="title d-flex text-4xl p-2">Accueil</h1> */}
        <div class="prets row">
          <LastPret />
          <SpeedPret />
        </div>
        <Analytics />
    </div>
  )
}