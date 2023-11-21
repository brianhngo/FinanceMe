import React from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordComponentProps {
  password: string;
}

export default function PasswordStrengthMeter({
  password,
}: PasswordComponentProps) {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Very weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return 'bg-white';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-green-500';
      case 4:
        return 'bg-green-700';
      default:
        return 'bg-none';
    }
  };

  return (
    <>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="mt-1 mb-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 ml-auto">
            {createPasswordLabel()}
          </div>
        </div>

        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
          <div
            style={{ width: `${num}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${funcProgressColor()}`}
          />
        </div>
      </div>
    </>
  );
}
