import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { DotsGrid, GithubIcon } from '@/components/icons';
import BgSvg from '@/components/bgSvg';
import AboutMe from '@/components/aboutme';
import Projects from '@/components/projects';
import Stack from '@/components/stack';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center overflow-x-hidden justify-center gap-4 min-h-[100vh] py-8 md:py-10 relative">
        <BgSvg className="absolute z-[0] top-0 object-fill left-0 md:min-w-full min-w-[50rem] h-full" />
        <div className="inline-block max-w-[50rem] text-center justify-center">
          <h1 className={`${title()}`}>Hi, my name is&nbsp;</h1>
          <h1 className={title({ color: 'blue' })}>Cvijan Djukanovic&nbsp;</h1>
          <br />
          <h1 className={title()}>welcome to my portfolio site.</h1>
          <h2 className={subtitle({ class: 'mt-4' })}>
            I am just a guy who enjoys coding and learning new things.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            href={'https://www.linkedin.com/in/cvijan-djukanovic/'}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
          >
            LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <section
        id={'about'}
        className="flex bg-slate-400/10 relative px-3 flex-col items-center justify-center gap-4  min-h-[100vh] md:h-fit md:min-h-fit md:py-10"
      >
        <DotsGrid
          color="rgba(37, 14, 95, 0.531)"
          className="absolute top-[-2rem] md:top-[-5%] z-0 right-0 w-[10rem] h-[5rem] md:w-[20rem] md:h-[10rem]"
        />
        <AboutMe />
      </section>
      <section
        className="flex relative px-3 flex-col items-center justify-start gap-4  min-h-[100vh] md:py-10"
        id="projects"
      >
        <Projects />
      </section>
      <section
        id="stack"
        className="bg-gradient-to-tr mt-20 from-indigo-700 to-blue-800 dark:from-indigo-800/70 dark:to-blue-900/70 flex flex-col items-center justify-center gap-4 min-h-[screen]  lg:min-h-[50vh] md:py-10"
      >
        <Stack />
        <Divider className="my-5" />
        <section
          id="contact"
          className="flex mt-10 flex-col items-center justify-center gap-4  md:py-10"
        >
          <h1 className="text-5xl text-white mb-10 font-bold">Contact</h1>
          <p className=" text-lg text-white opacity-40 ">
            You can contact me via email at
          </p>
          <Link
            href="mailto:
          cvijandjuka@gmail.com"
          >
            <Button color="warning" className="text-white" variant="shadow">
              cvijandjuka@gmail.com
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
}
