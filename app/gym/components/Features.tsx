const features = [
  {
    id: 1,
    image: 'https://placehold.co/150x150.jpg',
    text: 'ACCOUNTABILITY'
  },
  {
    id: 2,
    image: 'https://placehold.co/150x150.jpg',
    text: 'VARIETY'
  },
  {
    id: 3,
    image: 'https://placehold.co/150x150.jpg',
    text: 'SUPPORT'
  },
  {
    id: 4,
    image: 'https://placehold.co/150x150.jpg',
    text: 'MOTIVATION'
  },
  {
    id: 5,
    image: 'https://placehold.co/150x150.jpg',
    text: 'GUARANTEED RESULTS'
  },
  {
    id: 6,
    image: 'https://placehold.co/150x150.jpg',
    text: 'SOCIAL ATMOSPHERE'
  }
];

interface SingleFeatureProps {
  image: string;
  text: string;
  id: number;
}

const SingleFeature = ({ image, text, id }: SingleFeatureProps) => {
  return (
    <div className="flex flex-col items-center justify-center" key={id}>
      <img
        src={image}
        alt={text}
        className="h-20 w-20 transform transition duration-500 ease-in-out hover:scale-105 md:h-40 md:w-40"
      />
      <div className="font-poppins mb-5 mt-5 flex items-center justify-center text-center text-lg font-bold text-black md:text-2xl">
        {text.toUpperCase()}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-4">
      <h1 className="font-poppins text-center text-5xl font-bold text-black sm:text-6xl">
        Features
      </h1>
      <div className="nax-w-full mt-20 grid grid-cols-1 justify-evenly sm:grid-cols-3 md:grid-cols-6">
        {features.map((feature) => (
          <SingleFeature key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
