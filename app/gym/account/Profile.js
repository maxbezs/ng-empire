const Profile = ({ user, memberData }) => {
  console.log('PROFILE: ' + memberData);
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <div>
        {' '}
        {JSON.stringify(memberData)}
        <h1>
          Welcome, {memberData?.first_name} {memberData?.last_name}
        </h1>
        <p className="text-gray-600">Member since: {memberData.start_date}</p>
      </div>
    </section>
  );
};

export default Profile;
