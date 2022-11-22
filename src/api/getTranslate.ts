import { LanguageKeys } from '../utils/languages';

interface GetTranslateProps {
  text: string;
  translateFrom: LanguageKeys;
  translateTo: LanguageKeys;
}

export async function getTranslate({
  text,
  translateTo,
  translateFrom,
}: GetTranslateProps) {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`,
  );

  const data = await response.json();

  return data;
}
