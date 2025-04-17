import React from "react";

const steps = [
  "Visa Category",
  "Document Upload",
  "Departure & Arrival Information",
  "Preview & Confirmation",
  "Secure Payment",
  "Confirmation & Tracking"
];

const Tracker = ({ currentStep }) => {
  return (
    <div className="bg-[#F6F9FB] px-4 py-10 h-48">
      <div className="flex justify-between items-start max-w-6xl mx-auto">
        {steps.map((label, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step} className="flex-1 flex flex-col items-center relative">
              {/* Connecting Line */}
              {!isLast && (
                <div className="absolute top-5 left-1/2 w-full">
                  <div
                    className={`h-0.5 w-full ${
                      isActive && step !== currentStep ? "bg-[#BD9900]" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              )}

              {/* Step Circle */}
              <div
                className={`z-10 flex items-center justify-center w-14 h-14 rounded-full text-white text-lg font-semibold ${
                  isActive ? "bg-[#BD9900]" : "bg-gray-500"
                }`}
              >
                {step}
              </div>

              {/* Step Label */}
              <div className="text-sm text-center mt-2 w-24 leading-tight">
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracker;
