const features = [
  {
    id: 1,
    image: '/trainer.jpg',
    text: 'Personal Training',
    description: 'Work one-on-one with certified trainers to achieve your goals faster.'
  },
  {
    id: 2,
    image: '/group.jpg',
    text: 'Group Classes',
    description: 'Enjoy a variety of fun, high-energy classes led by expert instructors.'
  },
  {
    id: 3,
    image: '/guide.jpg',
    text: 'Nutrition Guidance',
    description: 'Get personalized meal plans and nutrition advice from professionals.'
  },
  {
    id: 6,
    image: '/support.jpg',
    text: 'Community Support',
    description: 'Join a supportive and motivating community of fitness enthusiasts.'
  }
];

interface SingleFeatureProps {
  image: string;
  text: string;
  description: string;
}

const SingleFeature = ({ image, text, description }: SingleFeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={text}
        className="h-56 w-56 rounded-lg object-cover shadow-lg md:h-56 md:w-56"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">{text}</h3>
      <p className="mt-2 max-w-prose text-sm text-gray-600 md:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 px-8 py-8 md:py-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Features</h1>
        <p className="mt-4 text-lg text-gray-700 sm:text-xl">
          Everything you need to achieve your fitness goals, under one roof.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
        {features.map((feature) => (
          <SingleFeature
            key={feature.id}
            image={feature.image}
            text={feature.text}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
