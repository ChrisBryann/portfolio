import Link from "next/link";
import WordCard from "./WordCard";
import { useEffect, useState } from "react";
import axios from "axios";
import * as words from "../store/words_dictionary.json";

const Home = () => {
  const [word, setWord] = useState<WordDefinition>();
  useEffect(() => {
    // set the new word card
    const fetchWord = async () => {
      let counter = 0;
      const keys = Object.keys(words);
      let res: any;
      let wantedWord: string;
      while (counter < 10) {
        try {
          wantedWord = keys[Math.floor(Math.random() * keys.length)];
          res = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${wantedWord}`
          );
          break;
        } catch (err) {
          counter++;
        }
      }

      if (res) {
        const data = res.data[0];
        setWord({
          title: data.word as string,
          phonetics: data.phonetics.map((item: any) => {
            return {
              text: item.text,
              audio: item.audio,
            };
          }),
          meanings: data.meanings.map((item: any) => {
            return {
              partOfSpeech: item.partOfSpeech,
              definition: item.definitions[0].definition,
            };
          }),
          url: data.sourceUrls[0],
        });
      }
    };
    fetchWord();
  }, []);
  return (
    <section className="h-fit overflow-x-hidden">
      <div className="flex flex-col m-4 gap-2 lg:flex-row items-center lg:m-0">
        <div className="px-8 pb-28 lg:px-32 flex flex-col justify-center align-between">
          <h1 className="text-4xl sm:text-6xl mt-32 font-bold tracking-wide">
            Hi, my name is
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide mt-4 break-words bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Christopher Bryan
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide mt-4">
            {"I'm a Software Engineer"}
          </h1>
          <Link
            href="#About"
            className="text-2xl font-bold p-0.5 mt-6 w-44 border border-4 border-dark-blue-ocean rounded-md hover:border-blue-ocean"
          >
            <div className="bg-gray-100">
              <span className="block text-center py-0.5 px-2 font-semibold font-bold bg-dark-blue-ocean bg-clip-text text-transparent hover:bg-blue-ocean">
                Learn more
              </span>
            </div>
          </Link>
        </div>
        {word && (
          <div className="mx-auto">
            <WordCard word={word} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
