import Slider from 'react-slick';

// Sample team members data
const teamMembers = [
  {
    name: 'Tom',
    role: 'CO-FOUNDER & Head of Brand and Coffee',
    image:
      'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-08_at_14.47.25_91c3db41-e9af-447d-8d78-1b6a5749c365_420x488_crop_center.png?v=1724344110'
  },
  {
    name: 'Sam',
    role: 'Our Strategic Brand Partner',
    image:
      'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-22_at_18.29.14_420x488_crop_center.png?v=1724344179'
  },
  {
    name: 'Amy',
    role: 'Head of MÁS QUE CAFÉ and Community',
    image:
      'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-22_at_18.38.04_420x488_crop_center.png?v=1724344722'
  },
  {
    name: 'SOON to be announced...',
    role: 'Our Strategic Brand Partner',
    image:
      'https://nakedground.coffee/cdn/shop/files/NG_Logo_7_Colors-04_420x488_crop_center.png?v=1723649887'
  }
];

const TeamSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    swipeToSlide: true
  };

  return (
    <div className="py-10 sm:hidden">
      <h2 className="mb-5 text-center text-2xl font-bold">OUR TEAM</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex transform flex-col items-center p-4 text-center transition-transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-auto w-full max-w-[400px] rounded-lg shadow-lg"
            />
            <h3 className="mt-3 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
