import React from "react";

const pricingModels = [
  {
    id: 1,
    name: "Free",
    subText: "A quick sample so you can see the magic in action.",
    price: 0,
    features: ["1 credit"],
  },
  {
    id: 2,
    name: "Starter",
    subText: "Let the editor create your first set of polished videos.",
    price: 5,
    features: ["10 credits"],
  },
  {
    id: 3,
    name: "Pro",
    subText: "Perfect for when you need more videos.",
    price: 10,
    features: ["25 credits"],
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-12 px-6 text-white">
      <h2 className="text-4xl font-bold text-center">💸 Pricing Plans</h2>
      <div className="text-center text-gray-300">
        <p className="text-xl text-balance">
          Your friendly editor does all the heavy lifting — just bring the
          ideas. Beautiful short videos with voiceovers, animations, and music,
          all at honest prices.
        </p>
        <p className="text-2xl font-semibold mt-3">
          1 credit = 1 video. No subscriptions, no surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {pricingModels.map((model) => (
          <div
            key={model.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <h3 className="text-2xl font-semibold mb-3">{model.name}</h3>
            <p className="text-gray-400 mb-4">{model.subText}</p>
            <div className="text-3xl font-bold text-yellow-500 mb-6">
              ${model.price}
            </div>
            <ul className="list-none mb-6 text-gray-300">
              {model.features.map((feature, index) => (
                <li key={index} className="text-lg text-gray-200 mb-2">
                  <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm mr-2">
                    ✔️
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full w-full hover:bg-blue-600 transition-all duration-200 dark:bg-blue-400 dark:hover:bg-blue-500">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
