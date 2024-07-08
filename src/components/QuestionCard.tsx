import React from 'react';

interface QuestionCardProps {
  question: string;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, onSelectAnswer }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(answer)}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
