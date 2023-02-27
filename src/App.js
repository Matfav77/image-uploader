import { useState } from 'react';

import Card from "./components/UI/Card/Card";
import UploadingAnimation from './components/UI/UploadingAnimation/UploadingAnimation';
import Button from "./components/UI/Button/Button";
import Footer from "./components/layout/Footer";

import styles from './App.module.css'
import Droparea from './components/Droparea/Droparea';

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const initialRender =
    !isUploading && !isUploaded && <Card title='Upload your image' details='File should be Jpeg, Png, WebP...' styles={styles.mainCard}>
      <Droparea setIsUploading={setIsUploading} />
      <p>Or</p>
      <Button txt='Choose a file' />
    </Card>

  const uploadingRender = isUploading && !isUploaded && <UploadingAnimation />

  return <>
    <main>
      {initialRender}
      {uploadingRender}
    </main>
    <Footer />
  </>
}

export default App;
