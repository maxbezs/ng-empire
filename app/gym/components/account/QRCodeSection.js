import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';

const QRCodeSection = ({ data }) => {
  const [showRealQR, setShowRealQR] = useState(false);

  // Fake encrypted data
  const fakeEncryptedData = btoa(
    JSON.stringify({
      id: data.email, // Example user or session ID
      name: data.firstName, // Example name
      checkInTime: new Date().toISOString() // Example timestamp
    })
  );

  const handleShowQR = () => {
    setShowRealQR(true);
  };

  return (
    <section className="relative rounded-lg bg-white p-6 text-center shadow">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Your QR Code</h2>
      {/* QR Code Display */}
      <div className="mx-auto mb-4 w-fit">
        {showRealQR && (
          <QRCodeCanvas value={fakeEncryptedData} size={150} bgColor="#FFFFFF" fgColor="#000000" />
        )}
      </div>

      {/* Button */}
      {!showRealQR && (
        <button
          onClick={handleShowQR}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Show QR Code
        </button>
      )}

      {/* Instruction for Real QR */}
      {showRealQR && (
        <p className="text-sm text-gray-500">Scan this code at the gym entrance for check-in.</p>
      )}
    </section>
  );
};

export default QRCodeSection;
