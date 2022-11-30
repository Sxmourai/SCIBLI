import './css/general.css';
import './css/overview.css';
import bootstrap from 'bootstrap';
import React from 'react';

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

function Book({index, title, desc, date }) {
  return (<tr>
            <td>{ index }</td>
            <td>{ title }</td>
            <td>{ desc }</td>
            <td>{ date }</td>
          </tr>
  )
}
function Books({ books }) {
  const filtered = [];
  books.forEach(book,i => {
  filtered.push(<Book index={i} title={book[0]} desc={book[1]} date={book[2]} />);
});

  return (
    <div>
      <table>
        <thead>
          <tr>Index</tr>
          <tr>Titre</tr>
          <tr>Description</tr>
          <tr>Date</tr>
        </thead>
        <tbody>{filtered}</tbody>
      </table>
    </div>
  )
}

class BooksTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
    this.handlFilterTextChange = this.handlFilterTextChange.bind(this)
  }
  
  handlFilterTextChange(filterText) {
    this.setState({filterText})
  }

  render() {
    const { books } = this.props;
    let items = [];
    books.forEach(book, i => {
      if (book[0].includes(inp.value())) {
        items.append(<Book index={i} title={book[0]} desc={book[1]} date={book[2]} />)
      }
    })
    return (<div>{items}</div>)
  }
}

function SpeedSearch() {
  const books = [["title1", "desc1", "date1"],["title2", "desc2", "date2"]]
  const search = () => {
    const inp = document.getElementById("search");
    let items = [];
    
    return items;
  }
  search();
  return (
    <div className="speedsearch col">
      <div className="input-group has-validation">
        <input type="text" className="form-control" id="search" placeholder="Type to search..." aria-describedby="search" onKeyUp={search} />
        <button onClick={search} className="input-group-text" id="search"><i className="bi bi-search"></i></button>
        {<Books books={books} />}
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