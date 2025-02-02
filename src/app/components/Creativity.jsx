import React from 'react'

const Creativity = () => {
  return (
    <div>
         <div className="container mx-auto w-[1140px] overflow-hidden relative h-64">
      <div className="flex absolute animate-move">
        {[1, 2, 3, 4, 5].map((card) => (
          <div
            key={card}
            className="card w-[300px] max-w-[300px] h-48 bg-white shadow-lg rounded-lg mx-4 p-6 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rounded-full hover:shadow-2xl"
          >
            <div className="content">
              <h2 className="text-xl font-bold">Card {card}</h2>
              <p className="text-gray-600">Hover to see more!</p>
              <div className="hidden-content mt-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-sm text-gray-700">
                  This is additional content for Card {card}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Creativity