import classes from './Card.module.css'
import Button from "./UI/Button";

const Card = ({img, price, name})=>{
    return(
        <div className={classes.card}>
            <img src={img} alt="img"/>
            <h2>{name}</h2>
            <span>{price} som</span>
            <Button/>
        </div>
    )
}

export default Card