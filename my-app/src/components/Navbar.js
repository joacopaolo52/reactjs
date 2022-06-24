import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
    return(
        <nav class="navbar">
            <h1>Kira Burger</h1>
        <div class="navbar-nav">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Burgers</a>
            <a class="nav-link" href="#">Beers</a>
            <a class="nav-link" href="#">About As</a>
          </div>
        <CartWidget/>
      </nav>
    )}

export default Navbar;