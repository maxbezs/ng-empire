'use client';
function MemberAccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-800">My Fitness Account</h1>
          <button className="rounded bg-red-500 px-4 py-2 text-white" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Section */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/100.png"
                alt="Profile"
                className="h-24 w-24 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
                <p className="text-gray-600">Member since: January 2023</p>
              </div>
            </div>
          </section>

          {/* QR Code Section */}
          <section className="rounded-lg bg-white p-6 text-center shadow">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Your QR Code</h2>
            <img src="https://via.placeholder.com/150.png" alt="QR Code" className="mx-auto mb-4" />
            <p className="text-sm text-gray-500">
              Scan this code at the gym entrance for check-in.
            </p>
          </section>

          {/* Payment & Subscription Section */}
          <section className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-800">Payment & Subscription</h2>
            <p className="my-2 text-gray-600">Next billing date: November 1, 2024</p>
            <p className="text-gray-600">Current plan: Premium ($29.99/month)</p>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Manage Payment Settings
            </button>
          </section>

          {/* Classes & Schedule Section */}
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
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Book New Class
            </button>
          </section>

          {/* Personal Data Section */}
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

          {/* Notifications Section */}
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
              <button className="rounded bg-blue-500 px-4 py-2 text-white">
                Update Preferences
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );

  function handleLogout() {
    // Placeholder for the logout functionality
    console.log('User logged out');
  }
}

export default MemberAccountPage;
