const Header = ({ memberData, onLogout }) => {
  // Dummy points for the member
  const dummyPoints = 7; // Example value
  const tokensToDisplay = Math.min(dummyPoints, 5); // Maximum 5 tokens
  const extraPoints = dummyPoints > 5 ? dummyPoints - 5 : 0;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Welcome, {memberData?.firstName} {memberData?.lastName}
          </h1>
          {/*<p className="text-gray-600"> Member since: {formatDate(memberData.createdAt)}</p>*/}
        </div>

        <div className="flex items-center space-x-6">
          {/* Token Display */}
          You got:
          <div className="flex items-center space-x-1">
            {Array.from({ length: tokensToDisplay }).map((_, index) => (
              <img
                key={index}
                src="https://cdn.shopify.com/s/files/1/0785/0233/0701/files/white-wink.png?v=1725632191"
                alt="Token"
                className="h-8 w-8 rounded-full bg-[#92d4ee] p-2"
              />
            ))}
            {extraPoints > 0 && (
              <span className="ml-2 text-sm font-medium text-gray-700">+{extraPoints}</span>
            )}
          </div>
          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
