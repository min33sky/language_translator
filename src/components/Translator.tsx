import { useState } from 'react';
import {
  ArrowsRightLeftIcon,
  SpeakerWaveIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import Selector from './Selector';
import { LanguageKeys } from '../utils/languages';
import { getTranslate } from '../api/getTranslate';

export default function Translator() {
  const [isLoading, setIsLoading] = useState(false);
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromLanguage, setFromLanguage] = useState<LanguageKeys>('ko-KR');
  const [toLanguage, setToLanguage] = useState<LanguageKeys>('en-GB');

  const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputName = e.target.name;
    if (inputName === 'fromText') {
      setFromText(e.target.value);
    }
  };

  /**
   * 번역 버튼 핸들러
   */
  const handleClickTranslate = async () => {
    setIsLoading(true);

    const data = await getTranslate({
      text: fromText,
      translateFrom: fromLanguage,
      translateTo: toLanguage,
    });

    setToText(data.responseData.translatedText);

    setIsLoading(false);
  };

  /**
   * 언어 선택 핸들러
   * @param language
   * @param type
   */
  const handleSelectLanguage = (language: LanguageKeys, type: string) => {
    if (type === 'from') {
      setFromLanguage(language);
    } else {
      setToLanguage(language);
    }
  };

  const handleClipboard = (type: 'from' | 'to') => {
    navigator.clipboard.writeText(type === 'from' ? fromText : toText);
  };

  return (
    <div className="w-11/12 max-w-3xl space-y-6 rounded-lg bg-slate-200 px-4 py-8 shadow-lg">
      <div className="-space-y-2">
        <section className="grid grid-cols-1  -space-y-2 md:grid-cols-2 md:space-y-0 ">
          <div className="relative  border  border-gray-300">
            <textarea
              name="fromText"
              className="h-64 w-full resize-none p-3 outline-none"
              placeholder="번역할 내용을 입력하세요"
              value={fromText}
              onChange={handleInputText}
            />
            <SpeakerWaveIcon
              title="음성"
              className="absolute top-2 right-2 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100"
            />
            <ClipboardDocumentIcon
              title="클립보드에 복사"
              onClick={() => handleClipboard('from')}
              className="absolute top-2 right-10 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100"
            />
          </div>

          <div className="relative  border border-gray-300">
            <textarea
              name="toText"
              className="h-64 w-full resize-none bg-white p-3 outline-none"
              placeholder="번역 결과"
              defaultValue={toText}
              readOnly
              disabled
            />
            <SpeakerWaveIcon
              title="음성"
              className="absolute top-2 right-2 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100"
            />
            <ClipboardDocumentIcon
              title="클립보드에 복사"
              onClick={() => handleClipboard('to')}
              className="absolute top-2 right-10 h-6 w-6 cursor-pointer text-gray-400 opacity-40 transition hover:opacity-100"
            />
          </div>
        </section>

        <section className="relative  flex items-center justify-between border border-gray-300 bg-white p-2">
          <Selector
            type="from"
            selectedLanguage={fromLanguage}
            changeLanguage={handleSelectLanguage}
          />

          <ArrowsRightLeftIcon className="h-6 w-6 cursor-pointer text-gray-500 transition hover:text-green-500" />

          <Selector
            type="to"
            selectedLanguage={toLanguage}
            changeLanguage={handleSelectLanguage}
          />
        </section>
      </div>

      <button
        disabled={isLoading || !fromText}
        onClick={handleClickTranslate}
        className={`w-full rounded-md bg-green-600 py-3 text-lg font-semibold tracking-widest text-green-100 transition hover:bg-green-800 disabled:cursor-progress disabled:bg-gray-500 disabled:text-gray-100`}
      >
        {isLoading ? '번역 중...' : '번역하기'}
      </button>
    </div>
  );
}
