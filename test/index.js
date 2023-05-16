import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { pdfjs, PDFViewer } from '../src';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

const App = () => {

  const [ annotations, setAnnotations ] = useState();

  useEffect(() => {
    fetch('sample-annotations.json')
      .then(response => response.json())
      .then(setAnnotations);
  }, []);

  const vocabFunction = () => {
    // Replace with API call 
    return ["A00.0", "A00.1"]
  }

  const widgets = [
    {widget: 'TAG', textPlaceHolder: 'Code Suggestions:'},
    {widget: 'TAG', textPlaceHolder: 'Add Code(s)', vocabulary: vocabFunction},
    {widget: 'COMMENT', disableReply: true},
  ]

  const user = {id: 'http://www.example.com/ab', displayName: 'ab'}

  return (
    <PDFViewer 
      mode="scrolling"
      config={{
        relationVocabulary: ['located_at', 'observed_at'],
        widgets: widgets,
        user: user
      }}
      url="compressed.tracemonkey-pldi-09.pdf" 
      annotations={annotations} 
      onCreateAnnotation={a => console.log(JSON.stringify(a))} 
      onUpdateAnnotation={(a, b) => console.log(JSON.stringify(a, b))} 
      onDeleteAnnotation={a => console.log(JSON.stringify(a))} />
  )

}

window.onload = function() {

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
    
}

