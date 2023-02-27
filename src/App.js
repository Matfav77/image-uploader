import { useState } from 'react';

import Card from "./components/UI/Card/Card";
import Footer from "./components/layout/Footer";
import Button from "./components/UI/Button/Button";

import styles from './App.module.css'
import Droparea from './components/Droparea/Droparea';

function App() {
  const [isUploading, setIsUploading] = useState(false);

  return <>
    <main>
      <Card title='Upload your image' details='File should be Jpeg, Png, WebP...' styles={styles.mainCard}>
        <Droparea setIsUploading={setIsUploading} />
        <p>Or</p>
        <Button txt='Choose a file' />
      </Card>
    </main>
    <Footer />
  </>
}

export default App;
