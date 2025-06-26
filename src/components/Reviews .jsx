import { useEffect, useState } from "react";

// Dummy fallback avatars
const fallbackAvatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate fetching reviews
    const sampleReviews = [
      {
        name: "Amina Rahman",
        rating: 5,
        comment: "Loved the plant quality and fast delivery!",
        avatar: fallbackAvatars[0],
      },
      {
        name: "Hasib Khan",
        rating: 4,
        comment: "Very fresh plants and beautiful packaging!",
        avatar: fallbackAvatars[1],
      },
      {
        name: "Farzana Sultana",
        rating: 5,
        comment: "Affordable and healthy plants. Will order again!",
        avatar: fallbackAvatars[2],
      },
      {
        name: "Rakib Hasan",
        rating: 4,
        comment: "Nice collection of rare plants.",
        avatar: fallbackAvatars[3],
      },
    ];

    setReviews(sampleReviews);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">🌟 Customer Reviews</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i}>☆</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
