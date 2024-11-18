const Profile = ({ user }) => (
  <section className="rounded-lg bg-white p-6 shadow">
    <div className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100.png"
        alt="Profile"
        className="h-24 w-24 rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">Member since: {user.joinDate}</p>
      </div>
    </div>
  </section>
);

export default Profile;
