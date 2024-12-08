import React from 'react'

const Reviews = () => {
    const reviews = [
        {
          name: "Sarah M.",
          rating: 5,
          review: "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.",
        },
        {
          name: "Alex K.",
          rating: 5,
          review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        },
        {
          name: "James L.",
          rating: 5,
          review: "As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        },
        {
          name: "Monica D.",
          rating: 5,
          review: "Shop.co never fails to impress me with their outstanding customer service and quality. I&apos;ve received so many compliments on the outfits I&apos;ve purchased!",
        },
      ];
  
  return (
    <section className="py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">OUR HAPPY CUSTOMERS</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-72 md:w-80"
            >
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="text-green-600 text-sm">✔</span>
              </div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Reviews
