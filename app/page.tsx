'use client';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
      <button
        onClick={() => router.push('/quiz')}
        className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
