const PersonalDataSection = () => (
  <section className="rounded-lg bg-white p-6 shadow">
    <h2 className="text-lg font-semibold text-gray-800">Personal Data</h2>
    <form className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          defaultValue="john.doe@example.com"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          defaultValue="+1 (555) 123-4567"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">Save Changes</button>
    </form>
  </section>
);

export default PersonalDataSection;
