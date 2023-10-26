import Link from "next/link";

const Home = () => {
    return (
      <section className="h-fit bg-gray-100 overflow-x-hidden">
        <div className="px-8 pb-28 lg:px-32 flex flex-col justify-center align-between">
          <h1 className="text-6xl mt-32 font-bold tracking-wide">
            Hi, my name is
            <span className="ml-3 break-words bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Christopher Bryan
            </span>
          </h1>
          <h1 className="text-6xl font-bold tracking-wide mt-4">{"I'm a Software Engineer"}</h1>
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
      </section>
    );
  };
  
  export default Home;
  