import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const App = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
         scanDelay={300}
         constraints={{
           aspectRatio: "1",
           facingMode: {
             exact: "environment"
           },
           width: { min: 480, ideal: 720, max: 1280 },
         }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
export default App
