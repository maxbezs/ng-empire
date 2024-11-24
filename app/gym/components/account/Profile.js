const Profile = ({ user, memberData }) => {
  console.log('PROFILE: ' + memberData);
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <div> {JSON.stringify(memberData)}</div>
    </section>
  );
};

export default Profile;
