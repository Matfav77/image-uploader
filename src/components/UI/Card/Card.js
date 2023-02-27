import styles from './Card.module.css';

function Card(props) {

    const classes = `${styles.card} ${props.styles}`

    return <div className={classes} onDrop={props.onDrop} onDragOver={props.onDragOver}>
        {props.title && <h1>{props.title}</h1>}
        {props.details && <p>{props.details}</p>}
        {props.children}
    </div>
}

export default Card;