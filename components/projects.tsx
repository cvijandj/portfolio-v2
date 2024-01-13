import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="pt-10 flex flex-col items-center justify-start">
      <h1 className="text-5xl mb-10 font-bold">Projects</h1>
      <div
        id="row"
        className="flex md:max-w-[80vw] flex-col justify-center items-center h-fit lg:flex-row gap-10 mt-10"
      >
        <div className="flex flex-col min-w-[13rem] max-w-[30rem] gap-5 text-start items-start justify-start h-full">
          <h1 className="text-3xl mb-3 font-bold">VirtualBae</h1>
          <p className="text-lg">
            VirtualBae is a chatting app that allows you to create character in
            a virtual environment and talk with it. This project was built using
            React, Next.js, and TailwindCSS.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-3">
            <Link href="https://virtualbae.ai/" target="_blank">
              <Button color="primary" variant="bordered">
                See Live
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt="me"
          src={require('@/assets/project1.png')}
          className="hover:opacity-90 shadow-lg rounded-md z-10 w-full md:w-[40rem] h-auto md:max-h-[25rem] "
        />
      </div>
      <div
        id="row"
        className="flex md:max-w-[80vw] flex-col justify-center items-center h-fit lg:flex-row gap-10 mt-10"
      >
        <div className="flex flex-col min-w-[13rem] max-w-[30rem] gap-5 text-start items-start justify-start h-full">
          <h1 className="text-3xl mb-3 font-bold">Ulf Swap</h1>
          <p className="text-lg">
            Ulf Swap is a decentralized exchange built on the Libex blockchain.
            This project was built using React, Styled-components, Solidity,
            NodeJs.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-3">
            <Link href="https://www.ulfswap.finance/" target="_blank">
              <Button color="primary" variant="bordered">
                See Live
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt="me"
          src={require('@/assets/project2.png')}
          className="hover:opacity-90 shadow-lg rounded-md z-10 w-full md:w-[40rem] h-auto md:max-h-[25rem] "
        />
      </div>
      <div
        id="row"
        className="flex md:max-w-[80vw] flex-col justify-center items-center h-fit lg:flex-row gap-10 mt-10"
      >
        <div className="flex flex-col min-w-[13rem] max-w-[30rem] gap-5 text-start items-start justify-start h-full">
          <h1 className="text-3xl mb-3 font-bold">Atelje Simikic</h1>
          <p className="text-lg">
            Atelje Simikic is a website for a local business. This project was
            built using React, Next.js.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-3">
            <Link href="https://ateljesimikic.rs/" target="_blank">
              <Button color="primary" variant="bordered">
                See Live
              </Button>
            </Link>
            <Link
              href="https://github.com/cvijandj/nextJsProject"
              target="_blank"
            >
              <Button color="primary" variant="light">
                Source code
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt="me"
          src={require('@/assets/project3.png')}
          className="hover:opacity-90 shadow-lg rounded-md z-10 w-full md:w-[40rem] h-auto md:max-h-[25rem] "
        />
      </div>
      <div
        id="row"
        className="flex md:max-w-[80vw] flex-col justify-center items-center h-fit lg:flex-row gap-10 mt-10"
      >
        <div className="flex flex-col min-w-[13rem] max-w-[30rem] gap-5 text-start items-start justify-start h-full">
          <h1 className="text-3xl mb-0 font-bold">ReactJS docs in Serbian</h1>
          <h2 className="text-1xl mb-3 opacity-70 font-semibold">{`(Work in progress)`}</h2>
          <p className="text-lg">
            Maintaining ReactJS docs in Serbian. This project was built using
            React, Next.js.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-3">
            <Link href="https://sr-react-dev.vercel.app/learn" target="_blank">
              <Button color="primary" variant="bordered">
                See Live
              </Button>
            </Link>
            <Link
              href="https://github.com/reactjs/sr.react.dev"
              target="_blank"
            >
              <Button color="primary" variant="light">
                Source code
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt="me"
          src={require('@/assets/project4.png')}
          className="hover:opacity-90 shadow-lg rounded-md z-10 w-full md:w-[40rem] h-auto md:max-h-[25rem] "
        />
      </div>
      <div
        id="row"
        className="flex md:max-w-[80vw] flex-col justify-center items-center h-fit lg:flex-row gap-10 mt-10"
      >
        <div className="flex flex-col min-w-[13rem] max-w-[30rem] gap-5 text-start items-start justify-start h-full">
          <h1 className="text-3xl mb-3 font-bold">LBX chain</h1>
          <p className="text-lg">
            LBX chain is a light WordPress site for a local business based in
            Bijeljina. This project was built using WordPress and Elementor.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-3">
            <Link href="https://lbxchain.com/" target="_blank">
              <Button color="primary" variant="bordered">
                See Live
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt="me"
          src={require('@/assets/project5.png')}
          className="hover:opacity-90 shadow-lg rounded-md z-10 w-full md:w-[40rem] h-auto md:max-h-[25rem] "
        />
      </div>
    </div>
  );
}
