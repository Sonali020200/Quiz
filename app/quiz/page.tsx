'use client';
import { useState } from 'react';
import { questions } from '../../src/utils/db';
import QuestionCard from '../../src/components/QuestionCard';
import { useRouter } from 'next/navigation';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswerSelection = (selectedAnswer: string, correctAnswer: string) => {
    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 10); 
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      router.push(`/result?score=${score}`); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        correctAnswer={questions[currentQuestionIndex].correct}
        onSelectAnswer={(selectedAnswer) => handleAnswerSelection(selectedAnswer, questions[currentQuestionIndex].correct)}
      />
    </div>
  );
};

export default QuizPage;
