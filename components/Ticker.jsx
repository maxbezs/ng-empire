const Ticker = ({ content, color, background }) => {
  return (
    <div
      className={
        background + ' wrapper relative mx-auto flex h-[50px] w-full items-center overflow-hidden'
      }
    >
      {content.map((text, index) => (
        <div
          key={index}
          className={`item animate-scrollLeft text-sm font-bold uppercase item${index + 1} absolute flex h-fit w-[240px] items-center justify-around text-${color} sm:w-[270px]`}
        >
          <div className={`bg-${color} h-2 w-2 rounded-full`} />
          {text}
        </div>
      ))}
    </div>
  );
};

export default Ticker;
