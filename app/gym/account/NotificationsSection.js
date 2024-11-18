const NotificationsSection = () => (
  <section className="rounded-lg bg-white p-6 shadow">
    <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
    <p className="mb-4 text-gray-600">Manage your notification preferences:</p>
    <form className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="classReminders"
          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
        />
        <label htmlFor="classReminders" className="ml-2 text-sm text-gray-700">
          Class reminders
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="promoUpdates"
          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
        />
        <label htmlFor="promoUpdates" className="ml-2 text-sm text-gray-700">
          Promotional updates
        </label>
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">Update Preferences</button>
    </form>
  </section>
);

export default NotificationsSection;
