import styles from './Button.module.css'

function Button(props) {

    return <button onClick={props.Onclick}>{props.txt}</button>
}

export default Button;