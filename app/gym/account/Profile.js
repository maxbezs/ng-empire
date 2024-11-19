const Profile = ({ user, memberData }) => {
  console.log('PROFILE: ' + memberData);
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/100.png"
          alt="Profile"
          className="h-24 w-24 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{memberData.first_name}</h2>
          <p className="text-gray-600">Member since: {memberData.joinDate}</p>
        </div>
      </div>
      <div>
        <h1>
          Welcome, {memberData?.first_name} {memberData?.last_name}
        </h1>
        <p>Email: {memberData?.email}</p>
        <p>Phone: {memberData?.phone}</p>
        <p>Membership: {memberData?.membership}</p>
        <p>Status: {memberData?.status}</p>
      </div>
    </section>
  );
};

export default Profile;
