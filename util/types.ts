type WordDefinition = {
  title: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definition: string; // take the first definition of the meaning
  }[];
  url: string;
};
