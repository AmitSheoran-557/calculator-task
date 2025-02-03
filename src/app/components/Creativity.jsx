"use client"
import React, { useState } from "react";

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  const increaseVolume = () => {
    if (volume < 100) {
      setVolume(volume + 10); 
    }
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      setVolume(volume - 10);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Volume Control</h1>
        <div className="flex items-center space-x-4">
          <button onClick={decreaseVolume} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none">
            Decrease
          </button>
          <div className="w-32 h-2 bg-gray-200 rounded-full relative">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${volume}%` }}></div>
          </div>
          <button onClick={increaseVolume} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
            Increase
          </button>
        </div>
        <p className="mt-4 text-center text-gray-700">Volume: {volume}%</p>
      </div>
    </div>
  );
};

export default VolumeControl;