import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <>
      <h1 className="text-4xl mb-10 font-bold">About Me</h1>
      <div className="flex relative flex-col justify-center items-center md:flex-row gap-4">
        <Image
          alt="me"
          src={require('@/assets/me.png')}
          className="rounded-md z-10 w-full max-w-[20rem] md:mr-5 aspect-[0.8]  md:max-h-[25rem] "
        />
        <div className="w-full h-fit flex flex-col items-center md:items-end justify-start">
          <p className="text-md z-10 max-w-[40rem] text-justify">
            {`Greetings! I'm a self-taught Full Stack Developer with over a year of hands-on experience in professional settings and an additional two years dedicated to personal projects. My journey is fueled by a genuine passion for learning, and I eagerly embrace emerging technologies with a fearless attitude.

You'll find me actively contributing to the ReactJS community on GitHub, where I take charge of managing specific sections of the documentation. My versatile tech stack includes TypeScript, JavaScript, Solidity, Node.js, Rust, MongoDB, React.js, Next.js, and PostgreSQL. Beyond a mere skill set, it represents my commitment to mastering diverse technologies and staying at the forefront of the ever-evolving development landscape.

Driven by the aspiration to be the best in my field, I believe in the transformative power of technology to bring about positive change. Whether it's crafting efficient and scalable code or collaborating with like-minded individuals, I am dedicated to pushing the boundaries of what is possible in the world of Full Stack Development.

Let's embark on the journey of building something extraordinary together!`}
          </p>
          <Link
            href="/Cvijan Djukanovic.pdf"
            target="_blank"
            locale={false}
            className=" hover:opacity-75 focus:opacity-70 rounded-full py-3 bg-gradient-to-tr px-10 my-5 from-indigo-700 to-blue-800 text-white shadow-lg"
          >
            Download my CV
          </Link>
        </div>
      </div>
    </>
  );
}
