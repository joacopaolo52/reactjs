import './Card.css';

function Card({product, price, img}) {
    return(
        <div className='card'>
            <img alt="Imagen de Producto" src= {img} />
            <h4>{product}</h4>
            <p>({price})</p>
        </div>
    )}

export default Card;