import Card from '../Card/Card';
import styles from './UploadingAnimation.module.css';

function UploadingAnimation(props) {

    return <Card title='Uploading...'>
        <div className={styles.loadingBar}>
        </div>
    </Card>
}

export default UploadingAnimation;
