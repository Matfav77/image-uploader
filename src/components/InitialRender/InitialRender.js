import { useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Droparea from "../Droparea/Droparea";

import styles from './InitialRender.module.css'

function InitialRender(props) {
    const fileInputRef = useRef();

    const openDialogBox = () => {
        fileInputRef.current.click();
    }


    return <Card title='Upload your image' details='File should be Jpeg, Png, WebP...' styles={styles.mainCard}>
        <Droparea setIsUploading={props.setIsUploading} />
        <p>Or</p>
        <form id='form' action='/' method='POST'>
            <input ref={fileInputRef} accept=".png, .jpg, .jpeg, .webp" type='file' id='fileUpload' hidden />
            <Button txt='Choose a file' onClick={openDialogBox} />
        </form>
    </Card>
}

export default InitialRender;