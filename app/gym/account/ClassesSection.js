const ClassesSection = () => (
  <section className="col-span-2 rounded-lg bg-white p-6 shadow">
    <h2 className="mb-4 text-lg font-semibold text-gray-800">Upcoming Classes</h2>
    <ul className="space-y-4">
      <li className="flex justify-between rounded-lg bg-gray-100 p-4">
        <span className="text-gray-800">Yoga - Monday 7:00 AM</span>
        <button className="text-blue-500">Cancel</button>
      </li>
      <li className="flex justify-between rounded-lg bg-gray-100 p-4">
        <span className="text-gray-800">HIIT - Wednesday 6:00 PM</span>
        <button className="text-blue-500">Cancel</button>
      </li>
      <li className="flex justify-between rounded-lg bg-gray-100 p-4">
        <span className="text-gray-800">Pilates - Friday 8:00 AM</span>
        <button className="text-blue-500">Cancel</button>
      </li>
    </ul>
    <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Book New Class</button>
  </section>
);

export default ClassesSection;
