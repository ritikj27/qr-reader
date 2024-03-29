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



// if (result) {

//   const scannedText = result.getText();
//   if (part.includes(scannedText)) {
//     alert(`Duplicate QR code. Please scan a unique QR code.`);
//   } else {
//     setPart([...part,scannedText]);
//     form.setFieldsValue({
//               partId: scannedText
//             });
//     setIsScanModal(!isScanModal);
//   }
// }

// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const App = (props) => {
//   const [scannedData, setScannedData] = useState('');
//   const [part, setPart] = useState([]);
//   const [isScanModal, setIsScanModal] = useState(false);
//   // const  [data,setData]
//   const handleScan = (result) => {
//     if (result) {
//       const scannedText = result;
//       if (part.includes(scannedText)) {
//         alert(`Duplicate QR code. Please scan a unique QR code.`);
//       } else {
//         setScannedData(scannedText);
//         setPart([...part, scannedText]);
//         setIsScanModal(!isScanModal);
//       }
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   return (
//     <>
//       <QrReader
//         scanDelay={300}
//         constraints={{
//           aspectRatio: "1",
//           facingMode: {
//             exact: "environment"
//           },
//           width: { min: 480, ideal: 720, max: 1280 },
//         }}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//       />
//       <p>Scanned Data: {scannedData}</p>
//       <ul>
//         {part.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

