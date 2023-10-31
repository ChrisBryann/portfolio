import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="About"
      className="h-fit px-8 md:px-32 pb-28 content-center text-black"
    >
      <h1 className="pt-12 uppercase font-bold text-center drop-shadow-sm text-bold text-6xl">
     {`"Knowing yourself is the beginning of all wisdom."`} <span className="text-sm">-Aristotle</span>
      </h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image
            src="/about-me.jpg"
            alt="about"
            className="shadow-lg rounded-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 md:ml-4 text-center md:text-left">
          <div className="">
            <span>
              {` I'm a Software Engineer from Surabaya, Indonesia.`} My work
              mainly focuses on Full Stack Development with a small
              concentration on Robot Process Automation (RPA).
              <br />
              <br />
              I graduated from University of California, Irvine with a Bachelors
              degree in Computer Science with emphasis on Artificial
              Intelligence and Machine Learning.
              <br />
              <br />
              {/* I love sports and music. I would spare time to play
              basketball and watch some American football highlights. On
              Sundays, I would involve myself in a band as a drummer for church
              ministry. */}
              My work involves being attentive to detail.
            </span>
          </div>
          <div className="mt-6">
            <span>
              For any business inquiries, please contact me{" "}
              <Link href="#Contact" className="underline">
                here
              </Link>
              .
            </span>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-4 border-dark-blue-ocean rounded-md py-1 px-2 w-36 text-dark-blue-ocean text-center font-bold hover:text-blue-ocean hover:border-blue-ocean">
            <Link href={"#"} className="about__resume text-l">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
