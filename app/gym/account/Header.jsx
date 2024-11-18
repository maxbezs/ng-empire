const Header = ({ onLogout }) => (
  <header className="bg-white shadow">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-800">My Fitness Account</h1>
      <button onClick={onLogout} className="rounded bg-red-500 px-4 py-2 text-white">
        Log Out
      </button>
    </div>
  </header>
);

export default Header;
