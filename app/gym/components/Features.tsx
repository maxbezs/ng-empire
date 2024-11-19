const features = [
  {
    id: 1,
    image: 'https://placehold.co/300x300.png?text=Personal+Trainer',
    text: 'Personal Training',
    description: 'Work one-on-one with certified trainers to achieve your goals faster.'
  },
  {
    id: 2,
    image: 'https://placehold.co/300x300.png?text=Group+Classes',
    text: 'Group Classes',
    description: 'Enjoy a variety of fun, high-energy classes led by expert instructors.'
  },
  {
    id: 3,
    image: 'https://placehold.co/300x300.png?text=Nutrition+Plans',
    text: 'Nutrition Guidance',
    description: 'Get personalized meal plans and nutrition advice from professionals.'
  },
  {
    id: 4,
    image: 'https://placehold.co/300x300.png?text=Modern+Equipment',
    text: 'State-of-the-Art Equipment',
    description: 'Access the latest fitness technology and gear for optimal training.'
  },
  {
    id: 5,
    image: 'https://placehold.co/300x300.png?text=Recovery+Lounge',
    text: 'Recovery Lounge',
    description: 'Relax and recharge in our recovery zone with massage chairs and more.'
  },
  {
    id: 6,
    image: 'https://placehold.co/300x300.png?text=Community',
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
        className="h-32 w-32 rounded-lg object-cover shadow-lg md:h-40 md:w-40"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">{text}</h3>
      <p className="mt-2 text-sm text-gray-600 md:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Features</h1>
        <p className="mt-4 text-lg text-gray-700 sm:text-xl">
          Everything you need to achieve your fitness goals, under one roof.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-16">
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
