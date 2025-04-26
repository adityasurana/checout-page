import React from 'react';
import './ProgressSteps.css';

const stages = [
  'Cart & address',
  'Request summary',
  'Under approval',
  'Approved',
  'Order generated'
];

const currentStep = 1;
const stepBarWidths = [250, 170, 170, 260];

const ProgressSteps = () => {
  return (
    <div className="progressStepsWrapper">
      {stages.map((stage, index) => (
        <div className="stepColumn" key={index}>
          <div className="stepLabel">{stage}</div>
          <div className="stepContent">
            <div
              className={`stepCircle ${
                index < currentStep ? 'completed' :
                index === currentStep ? 'active' : 'pending'
              }`}
            >
              {index === currentStep && index !== stages.length - 1 && <div className="innerCircle" />}
              {index === currentStep && index === stages.length - 1 && <span className="checkIcon">✓</span>}
            </div>

            {index < stages.length - 1 && (
              <div className="stepBar" style={{ width: `${stepBarWidths[index]}px` }}>
                {index < currentStep ? (
                  <div className="stepBarFull" />
                ) : index === currentStep ? (
                  <>
                    <div className="stepBarHalfColored" />
                    <div className="stepBarHalfGrey" />
                  </>
                ) : (
                  <div className="stepBarGrey" />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
