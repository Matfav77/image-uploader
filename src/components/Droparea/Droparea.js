import Card from "../UI/Card/Card";
import icon from '../../image.svg'

import styles from './Droparea.module.css'

function Droparea(props) {

    return <Card styles={styles['filedrop']}>
        <img src={icon} alt='Logo of a mountain, suggesting a file can be dropped here'></img>
        <p>Drag and drop your file here</p>
    </Card>
}

export default Droparea;