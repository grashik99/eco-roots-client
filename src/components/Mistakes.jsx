const Mistakes = () => {
  const mistake = [
    "Overwatering - Too much water can lead to root rot.",
    "Underwatering - Inconsistent watering stresses the plant.",
    "Improper lighting - Placing plants in the wrong light conditions.",
    "Ignoring humidity needs - Some plants need higher humidity.",
    "Wrong soil type - Not all plants thrive in the same soil.",
    "Not repotting - Keeping plants in small pots too long.",
    "Using cold water - It can shock the plant's roots.",
    "Neglecting pests - Ignoring signs of infestation.",
  ];

  return (
    <div className="p-6 my-6 bg-green-50 rounded-2xl shadow-lg">
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-800">
          Top Plant Care Mistakes
        </h2>
        <ul className="list-disc list-inside space-y-2 text-green-900">
          {mistake.map((mistake, index) => (
            <li key={index}>{mistake}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Mistakes;
