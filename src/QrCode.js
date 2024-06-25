import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QrCode = () => {
  const [qrValue, setQrValue] = useState('https://example.com');

  return (
    // <div>
    //   <header className="App-header">
    //     <h1>QR Code Generator</h1>
    //     <QRCode
    //       size={256}
    //       bgColor={"#000000"}
    //       fgColor={"#249F78"}
    //       includeMargin={true}
    //       value={qrValue}
    //     />
    //     <input
    //       type="text"
    //       value={qrValue}
    //       onChange={(e) => setQrValue(e.target.value)}
    //     />
    //   </header>
    // </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">QR Code Generator</h1>
          <p className="text-gray-600">Generate your own QR codes easily</p>
        </header>
        <div className="flex justify-center mb-6">
          <QRCode
            size={256}
            bgColor={"#000000"}
            fgColor={"#249F78"}
            includeMargin={true}
            value={qrValue}
          />
        </div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-full p-3 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            placeholder="Enter URL or text"
          />
        </div>
      </div>
    </div>
  );
};

export default QrCode;
