import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from './UploadedRender.module.css'

function UploadedRender(props) {



    return <Card>
        <div className={styles.checkmark}>&#x2713;</div>
        <p>Uploaded Successfully!</p>
        <img src={props.src} alt='The image that was just uploaded by the user'></img>
        <div className={styles.urlDisplay}><input type='text' /><Button txt='Copy link' /></div>
    </Card>
}

export default UploadedRender;