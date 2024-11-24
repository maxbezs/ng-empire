import { useState } from 'react';

const NotificationsSection = () => {
  const initialPreferences = {
    classReminders: true,
    promoUpdates: false
  };
  const [preferences, setPreferences] = useState({
    classReminders: initialPreferences.classReminders,
    promoUpdates: initialPreferences.promoUpdates
  });

  const isEdited =
    preferences.classReminders !== initialPreferences.classReminders ||
    preferences.promoUpdates !== initialPreferences.promoUpdates;

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [id]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Preferences:', preferences);
  };

  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
      <p className="mb-4 text-gray-600">Manage your notification preferences:</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="classReminders"
            checked={preferences.classReminders}
            onChange={handleChange}
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
            checked={preferences.promoUpdates}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="promoUpdates" className="ml-2 text-sm text-gray-700">
            Promotional updates
          </label>
        </div>
        {isEdited && (
          <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
            Update Preferences
          </button>
        )}
      </form>
    </section>
  );
};

export default NotificationsSection;
