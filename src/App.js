// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";

// const App = (props) => {
//   const [data, setData] = useState("No result");
//   const [part, setPart] = useState([]);
//   const [isScanModal, setIsScanModal] = useState(false);
//   const [fieldsValue, setFieldsValue] = useState({ partId: "" });

//   return (
//     <>
//       <h2>hello world</h2>
//       <QrReader
//         id="qrReader"
//         scanDelay={300}
//         constraints={{
//           aspectRatio: "1",
//           facingMode: {
//             exact: "environment",
//           },
//           width: { min: 480, ideal: 720, max: 1280 },
//         }}
//         onError={(error) => console.error(error)}
//         onScan={(result) => {
//           if (result) {
//             const scannedText = result;
//             if (part.includes(scannedText)) {
//               alert(`Duplicate QR code. Please scan a unique QR code.`);
//             } else {
//               setPart([...part, scannedText]);
//               setFieldsValue({
//                 partId: scannedText,
//               });
//               setIsScanModal(!isScanModal);
//             }
//           }
//         }}
//         style={{ width: "100%" }}
//       />
//       <h2>{fieldsValue.partId}</h2>
//     </>
//   );
// };

// export default App;

import React, {useState} from 'react'
// import QrScan from 'react-qr-reader'
import { QrReader } from "react-qr-reader";

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>

            <span>QR Scanner</span>

            <center>
            <div style={{marginTop:30}}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>

            <textarea
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />

      </div>
    );
  }

  export default QRscanner;
