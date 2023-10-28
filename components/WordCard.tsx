import { LightBulbIcon, ShareIcon } from "@heroicons/react/24/outline";

type Props = {
  word: WordDefinition;
};

const WordCard = ({ word }: Props) => {
  return (
    <div className="relative block break-words overflow-hidden h-fit bg-white shadow-lg rounded-lg p-4 mb-12 sm:p-6 lg:mr-28 lg:mb-0 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="flex justify-between gap-4">
        <div>
          <p className="pb-5 font-bold text-dark-blue-ocean text-3xl">
            Word of the Day
          </p>
          <h3 className="text-lg font-bold text-black sm:text-2xl">
            {word.title}
          </h3>

          {word.phonetics.length > 0 && (
            <p className="mt-1 text-sm font-medium text-gray-600">
              {word.phonetics
                .map<React.ReactNode>((item, index) => {
                  return (
                    <span
                      className={`${
                        item.audio && "hover:text-black hover:cursor-pointer"
                      }`}
                      onClick={() => {
                        item.audio &&
                          (
                            document.getElementById(
                              `audio_${index}`
                            ) as HTMLAudioElement
                          ).play();
                      }}
                      key={index}
                    >
                      {item.audio && (
                        <audio id={`audio_${index}`} src={item.audio} />
                      )}
                      {item.text}
                    </span>
                  );
                })
                .reduce((prev, curr) => [prev, " • ", curr])}
            </p>
          )}
        </div>

        <div className="block">
          {/* <Image
            alt="Paul Clapton"
            src=""
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
            width={600}
            height={400}
          /> */}
          <LightBulbIcon className="h-6 w-6 rounded-lg object-cover shadow-sm" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-y-2">
        {word.meanings.map((item, index) => {
          return (
            <p
              key={index}
              className="max-w-[40ch] break-normal text-md text-gray-500"
            >
              <span className="text-blue-ocean">{item.partOfSpeech}</span>{" "}
              <span className="text-black">‣</span> {item.definition}
            </p>
          );
        })}
      </div>

      <dl className="mt-6 flex justify-end gap-4 sm:gap-6">
        {/* <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">31st June, 2021</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div> */}
        {word.url && (
          <a href={word.url} target="_blank">
            <ShareIcon className="h-6 w-6" />
          </a>
        )}
      </dl>
    </div>
  );
};

export default WordCard;
