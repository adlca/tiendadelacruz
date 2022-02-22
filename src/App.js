import logo from './logo.svg';
import './App.css';
import CardInfoDebt from './components/CardInfoDebt';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ShoppingCart from './components/ShoppingCart';
import { useState, useEffect } from 'react';

const products = [
  {
    url: "https://via.placeholder.com/150",
    name: "item1",
    detail: "Lorem ipsum dolor sit amet ciatis. t commodi, ut esse et. Quo, corporis.",
    qty: 0,
    id: 1
  },
  {
    url: "https://via.placeholder.com/150",
    name: "item2",
    detail: "Lorem ipsum dolor sit amet ciatis. t commodi, ut esse et. Quo, corporis.",
    qty: 0,
    id: 2

  },
  {
    url: "https://via.placeholder.com/150",
    name: "item3",
    detail: "Lorem ipsum dolor sit amet ciatis. t commodi, ut esse et. Quo, corporis.",
    qty: 0,
    id: 3
  }
]

function App() {
  const [cartQty, setCardQty] = useState(0)
  const [productList, setProductList] = useState([])

  const mockProducts = () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve(products)
        }, 3000)
      }
    )
  }


  useEffect(() => {


  }, [])



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href={()=>{}}>Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href={()=>{}}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={()=>{}}>Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href={()=>{}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href={()=>{}}>Action</a>
                <a className="dropdown-item" href={()=>{}}>Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href={()=>{}}>Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href={()=>{}}>Disabled</a>
            </li>
            <li className="nav-item">
              <ShoppingCart itemQty={cartQty} />
            </li>
          </ul>

        </div>
      </nav>
      <ItemListContainer></ItemListContainer>
    </>

    // <div className="App">
    //   <CardInfoDebt totalAmount={200.00} dateOfExpiration={"15/09/2056"} dateOfIssue={"15/09/1986"}   ></CardInfoDebt>
    // </div>
  );
}

export default App;
