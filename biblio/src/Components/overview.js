import './css/general.css';
import './css/overview.css';
import bootstrap from 'bootstrap';

function LastPret() {
  return (
    <div className="lastpret col">

    </div>
  )
}
function Analytics() {
  return (
    <div className="analytics col container">
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

function SpeedSearch() {
  return (
    <div className="speedsearch col">
      <div className="input-group has-validation">
        <input type="text" className="form-control" id="search" placeholder="Type to search..." aria-describedby="search" />
        <button className="input-group-text" id="search"><i className="bi bi-search"></i></button>
      </div>
    </div>
  )
}

export function Overview() {
  return (
    <div className="container overview mt-5 border-dark shadow rounded">
        {/* <h1 className="title d-flex text-4xl p-2">Accueil</h1> */}
        <div className="prets row">
          <LastPret />
          <Analytics />
        </div>
        <SpeedSearch />
    </div>
  )
}