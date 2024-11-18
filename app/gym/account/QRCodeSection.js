const QRCodeSection = () => (
  <section className="rounded-lg bg-white p-6 text-center shadow">
    <h2 className="mb-4 text-lg font-semibold text-gray-800">Your QR Code</h2>
    <img src="https://via.placeholder.com/150.png" alt="QR Code" className="mx-auto mb-4" />
    <p className="text-sm text-gray-500">Scan this code at the gym entrance for check-in.</p>
  </section>
);

export default QRCodeSection;
