import { useState } from 'react';

export default function Translator() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClickTranslate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-10/12 max-w-2xl rounded-lg bg-slate-200 px-4 py-6 shadow-lg">
      <div>번역 공간</div>

      <div>
        <button
          disabled={isLoading}
          onClick={handleClickTranslate}
          className={`w-full rounded-md bg-green-600 py-3 text-lg font-semibold tracking-widest text-green-100 transition hover:bg-green-800 disabled:cursor-progress disabled:bg-gray-500`}
        >
          번역
        </button>
      </div>
    </div>
  );
}
