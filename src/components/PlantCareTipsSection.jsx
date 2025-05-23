import { CiLight } from "react-icons/ci";
import { GiFertilizerBag, GiPlantWatering } from "react-icons/gi";

const PlantCareTipsSection = () => {
  const tips = [
    {
      title: "Light Matters",
      description:
        "Place your plants in spots where they get the right amount of light. Some thrive in full sun, others in indirect light.",
      icon: <CiLight />,
    },
    {
      title: "Water Wisely",
      description:
        "Overwatering is the #1 killer of houseplants. Always check if the top inch of soil is dry before watering.",
      icon: <GiPlantWatering />,
    },
    {
      title: "Feed Them Right",
      description:
        "Use the right fertilizer during growing seasons. Overfeeding can burn roots and harm your plant.",
      icon: <GiFertilizerBag/>,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Essential Plant Care Tips
        </h2>
        <p className="text-green-700 mb-12 text-lg">
          Caring for your plants doesn't have to be hard. Just a few mindful
          habits can keep them thriving year-round.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="w-10 mx-auto text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-green-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCareTipsSection;
