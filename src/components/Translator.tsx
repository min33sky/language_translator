import { useState } from 'react';
import {
  ArrowsRightLeftIcon,
  SpeakerWaveIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';

export default function Translator() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClickTranslate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-11/12 max-w-3xl space-y-6 rounded-lg bg-slate-200 px-4 py-8 shadow-lg">
      <div className="-space-y-2">
        <section className="grid grid-cols-1  -space-y-2 md:grid-cols-2 md:space-y-0 ">
          <div className="relative  border  border-gray-300">
            <textarea
              className="h-64 w-full resize-none p-3 outline-none"
              placeholder="입력하세요"
            />
            <SpeakerWaveIcon className="absolute top-2 right-2 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100" />
            <ClipboardDocumentIcon className="absolute top-2 right-10 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100" />
          </div>

          <div className="relative  border border-gray-300">
            <textarea
              className="h-64 w-full resize-none p-3 outline-none"
              placeholder="입력하세요"
            />
            <SpeakerWaveIcon className="absolute top-2 right-2 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100" />
            <ClipboardDocumentIcon className="absolute top-2 right-10 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100" />
          </div>
        </section>

        <section className="relative  flex items-center justify-between border border-gray-300 bg-white p-2">
          <select className="cursor-pointer p-2 outline-none">
            <option value="">한국어</option>
            <option value="">영어</option>
            <option value="">일본어</option>
            <option value="">중국어</option>
          </select>

          <ArrowsRightLeftIcon className="h-6 w-6 cursor-pointer text-gray-500 transition hover:text-green-500" />

          <select className="cursor-pointer p-2 outline-none">
            <option value="">한국어</option>
            <option value="">영어</option>
            <option value="">일본어</option>
            <option value="">중국어</option>
          </select>
        </section>
      </div>

      <button
        disabled={isLoading}
        onClick={handleClickTranslate}
        className={`w-full rounded-md bg-green-600 py-3 text-lg font-semibold tracking-widest text-green-100 transition hover:bg-green-800 disabled:cursor-progress disabled:bg-gray-500`}
      >
        번역
      </button>
    </div>
  );
}
