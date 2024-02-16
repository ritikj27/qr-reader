import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = (props) => {
  const [data, setData] = useState("No result");
  const [part,setPart] = useState();
  const [setIsScanModal,isScanModal] = useState()
  const [FieldsValue,setFieldsValue] = useState()

  return (
    <>
      {/* <QrReader scanDelay={300} constraints={{
        facingMode: "user"
      }}
        onResult={(result, error) => {
          if (result) {
            setData(result?.getText());
          }

          if (error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p> */}
      <QrReader
        id="qrReader"
        scanDelay={300}
        constraints={{
          aspectRatio: "1",
          facingMode: {
            exact: "environment",
          },
          width: { min: 480, ideal: 720, max: 1280 },
        }}
        onError={(error) => console.error(error)}
        onResult={(result) => {
          if (result) {
            const readerRef = document.getElementById("qrReader");
            if (readerRef) {
              readerRef.autofocus();
              const scannedText = result.getText();
              if (part.includes(scannedText)) {
                alert(`Duplicate QR code. Please scan a unique QR code.`);
              } else {
                setPart([...part, scannedText]);
               setFieldsValue({
                  partId: scannedText,
                });
                setIsScanModal(!isScanModal);
              }
            }
          }
        }}
        style={{ width: "100%" }}
      />

      <h2>{FieldsValue?.partId}</h2>
    </>
  );
};
export default App;
