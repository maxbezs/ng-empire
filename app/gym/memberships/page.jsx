const JoinNow = () => {
  return (
    <div className="bg-gray-100 px-5 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold">Choose Your Plan</h1>

      <div className="mx-auto flex max-w-full flex-wrap justify-center gap-8">
        <MembershipCard
          title="Standard Membership"
          price="£34.99"
          description="Unlock the gateway to fitness with our Gym Access Only membership. Experience the freedom to workout routine at your pace. Enjoy unlimited access to state-of-the-art fitness equipment and facilities, empowering you to pursue your fitness goals on your terms. Elevate your fitness journey with the convenience and flexibility of our exclusive Gym Access Only membership."
          image="/membership_01.png"
        />
        <MembershipCard
          title="Gym & Classes Membership"
          price="£39.99"
          description="Embark on a complete fitness journey with our Gym and Classes Membership. Access top-notch gym facilities and join diverse instructor-led classes, catering to all fitness levels. Enjoy the perfect blend of independent workouts and dynamic group fitness experiences—all under one membership. Your path to a healthier, stronger you starts here."
          image="/membership_02.png"
        />
        <MembershipCard
          title="Performance Membership"
          price="£59.99"
          description="Tailored for individuals, fuelled by collective motivation. Our performance membership combines personalised coaching benefits with the added inspiration of a group environment. Accelerate your fitness journey safely, concentrate on crucial technical details, and move with confidence."
          image="/membership_03.png"
        />
        <MembershipCard
          title="KickStart Membership"
          price="£199.99"
          description="Transform your lifestyle in just 90 days with our exclusive membership, including 3 weekly small group pt sessions, unlimited gym access, and dedicated support. Experience a lifestyle overhaul and kickstart your fitness journey in just three months!"
          image="/membership_04.png"
        />
        <MembershipCard
          title="Student Termly Membership"
          price="£100"
          description="Stay dedicated throughout the academic term with no need to pause your membership during breaks. Pay upfront for the term and enjoy unlimited access to all our fitness facilities, with no hidden fees, contracts, or complications."
          image="/membership_05.png"
        />
      </div>
    </div>
  );
};

const MembershipCard = ({ title, price, description, image }) => {
  return (
    <div className="flex w-[500px] flex-col rounded-lg bg-white p-5 shadow-md">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <img src={image} alt={title} className="mb-4 h-[500px] w-[500px] rounded-lg" />
      <p className="mb-4 text-lg font-bold">From {price}</p>
      <p className="mb-4 text-gray-600">{description}</p>
      <button className="mt-auto rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
        View Options
      </button>
    </div>
  );
};

export default JoinNow;
