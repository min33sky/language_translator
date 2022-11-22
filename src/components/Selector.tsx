import React, { useEffect, useState } from 'react';
import { LanguageKeys, languages } from '../utils/languages';

interface Props {
  type: 'from' | 'to';
  selectedLanguage: LanguageKeys;
  changeLanguage: (language: LanguageKeys, type: 'from' | 'to') => void;
}

export default function Selector({
  type,
  selectedLanguage,
  changeLanguage,
}: Props) {
  const [languageKey, setLanguageKey] = useState<LanguageKeys[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const language = value as LanguageKeys;
    changeLanguage(language, type);
  };

  useEffect(() => {
    const keys = Object.keys(languages) as LanguageKeys[];
    setLanguageKey(keys);
  }, []);

  return (
    <select
      className="cursor-pointer p-2 outline-none"
      value={selectedLanguage}
      onChange={handleChange}
    >
      {languageKey.map((key) => {
        return (
          <option value={key} key={key}>
            {languages[key]}
          </option>
        );
      })}
    </select>
  );
}
