import React,{useState} from 'react'
import Card from './Card';
export default function Header(){
    //USING STATE AND SETTING CART VALUE TO DEFAULT 0
    const [state,setState]=useState(0);
    return(
        //NAVBAR USED FROM BOOTSTRAP
        <div>
        
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">𝕽𝔒̸̷ℂ𝐊𝐒̷𝐓Λ𝕽</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Popular Items</a></li>
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-dark" type="submit">🛒Cart {state}</button>
      </form>
    </div>
  </div>
</nav>
</div>

<Card
state={state}
setState={setState}
/>

        </div>
    )
}
//PASSING STATE AND SETSTATE USING PROPS TO CARD COMPONENT