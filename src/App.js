import React ,{useState} from 'react';
//plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
//Import main component
import  {Viewer} from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
//worker
import {Worker} from "@react-pdf-viewer/core";
import pdffile from "./pdf/theory.pdf";

import './App.css';

function App() {
  const[defaultPdfFile]=useState(pdffile);

  //create new plugins instance
  const defaultLayoutPluginInstance=defaultLayoutPlugin();
 
  return (
    <div className="pdf-Container">
<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
       <Viewer fileUrl={defaultPdfFile}
      plugins={[defaultLayoutPluginInstance]} />
       
       </Worker>
           </div>
  );
}

export default App;
