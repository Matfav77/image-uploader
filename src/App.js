import { useState } from 'react';

import InitialRender from './components/InitialRender/InitialRender';
import UploadingAnimation from './components/UI/UploadingAnimation/UploadingAnimation';
import UploadedRender from './components/UploadedRender/UploadedRender';
import Footer from "./components/layout/Footer";

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);


  const initialRender = !isUploading && !isUploaded && <InitialRender setIsUploading={setIsUploading} setIsUploaded={setIsUploaded} />

  const uploadingRender = isUploading && !isUploaded && <UploadingAnimation />;

  const uploadedRender = !isUploading && isUploaded && <UploadedRender />;

  return <>
    <main>
      {initialRender}
      {uploadingRender}
      {uploadedRender}
    </main>
    <Footer />
  </>
}

export default App;
