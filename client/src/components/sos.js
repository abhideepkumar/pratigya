import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSwipeable } from "react-swipeable";

const Sos = () => {
  const [showSOS, setShowSOS] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  const handleReset = () => {
    setShowSOS(false);
    setSecondsRemaining(5);
  };

  const handleSwipe = () => {
    handleReset();
    toast.error("SOS cancelled❌");
  };

  const handleMouseDown = (event) => {
    event.preventDefault();

    const handleMouseMove = (event) => {
      if (event.clientX - event.startX > 50) {
        handleSwipe();
        cleanupListeners();
      }
    };

    const handleMouseUp = () => cleanupListeners();

    const cleanupListeners = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const swipeHandlers = useSwipeable({ onSwiped: handleSwipe });

  useEffect(() => {
    if (showSOS) {
      const intervalId = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
        if (secondsRemaining === 0) {
          toast.success("SOS called🚨");
          handleReset();
        }
      };
    }
  }, [showSOS, secondsRemaining]);

  return (
    <main className="text-white">
      {/* SOS trigger */}
      <button
        onClick={() => {
          setShowSOS(true);
        }}
        className="fixed z-10 right-4 bottom-4 w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full p-4 m-2 shadow-md shadow-red-500/50"
      >
        <p className="font-semibold">SOS</p>
      </button>

      {/* SOS modal */}
      {showSOS && (
        <div className="absolute h-full w-full backdrop-filter backdrop-blur backdrop-brightness-50">
          <div className="flex justify-center items-center h-full w-full flex-col">
            {/* SOS countdown */}
            <div className="w-40 h-40 border-4 rounded-full flex justify-center items-center mb-3">
              <div className="w-32 h-32 bg-red-500 hover:bg-red-600 rounded-full p-4 m-2 flex justify-center items-center">
                <p className="font-semibold text-5xl">SOS</p>
              </div>
            </div>
            <p>Slide to cancel in {secondsRemaining} seconds</p>
            {/* Cancel button  */}
            <div
              className="bg-red-500 mt-5 p-3 w-4/5 text-center hover:bg-red-600 rounded-full font-semibold transition-transform"
              {...swipeHandlers}
              onMouseDown={handleMouseDown}
            >
              <button>Swipe here Cancel</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Sos;
