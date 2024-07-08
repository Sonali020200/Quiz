'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { questions } from '../../src/utils/db';

const Result = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Your Score</h1>
        <p className="text-xl">{score} / {questions.length * 10}</p>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => router.push('/quiz')}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-700"
          >
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
