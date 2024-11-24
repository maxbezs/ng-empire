import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';

const QRCodeSection = () => {
  const [showRealQR, setShowRealQR] = useState(false);

  const realQRData = 'https://your-dummy-data-link.com';

  const handleShowQR = () => {
    setShowRealQR(true);
  };

  return (
    <section className="relative rounded-lg bg-white p-6 text-center shadow">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Your QR Code</h2>
      {/* Foreground Content */}
      <div className="mx-auto mb-4 w-fit">
        {showRealQR && (
          <QRCodeCanvas value={realQRData} size={150} bgColor="#FFFFFF" fgColor="#000000" />
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
