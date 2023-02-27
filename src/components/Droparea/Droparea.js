import { useState } from 'react';
import Card from "../UI/Card/Card";
import icon from '../../image.svg'

import styles from './Droparea.module.css'

function Droparea(props) {

    const [uploadedSeveralFiles, setUploadedSeveralFiles] = useState(false);

    const acceptedTypes = ['image/jpeg', 'image.png', 'image/webp'];

    const dropHandler = e => {
        e.preventDefault();
        const filesObj = e.dataTransfer.files;
        const files = [...filesObj];
        if (files.length > 1) setUploadedSeveralFiles(true);
        else {
            setUploadedSeveralFiles(false);
            const file = files[0];
            if (acceptedTypes.includes(file.type)) {
                props.setIsUploading(true);
                console.log(file.name);
            }
        }
    }

    const dragOverHandler = e => {
        e.preventDefault();
    }

    return <Card styles={styles['filedrop']} onDrop={dropHandler} onDragOver={dragOverHandler}>
        <img src={icon} alt='Logo of a mountain, suggesting a file can be dropped here'></img>
        {uploadedSeveralFiles ? <p className={styles.warning}>Please upload a single file</p> : <p>Drag and drop your file here</p>}
    </Card>
}

export default Droparea;