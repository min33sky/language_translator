interface GetTranslateProps {
  text: string;
  translateFrom: string;
  translateTo: string;
}

export async function getTranslate({
  text,
  translateTo,
  translateFrom,
}: GetTranslateProps) {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`,
  );
}
