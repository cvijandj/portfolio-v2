import { FaHtml5, FaCss3Alt, FaRust } from 'react-icons/fa';
import {
  SiTypescript,
  SiSolidity,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiLinux,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaNode } from 'react-icons/fa6';
import { GrReactjs } from 'react-icons/gr';
import NamedIcon from './namedIcon';

export default function Stack() {
  return (
    <div className="w-full h-full flex flex-col justify-center  items-center pt-40 px-5">
      <h1 className="text-5xl text-white font-bold">Stack</h1>
      <p className="text-white text-lg opacity-40 mb-10">
        I have experience working with the following languages, frameworks and
        tools:
      </p>
      <div className="flex flex-row justify-center items-center gap-10 flex-wrap">
        <NamedIcon name="HTML" icon={FaHtml5} />
        <NamedIcon name="CSS" icon={FaCss3Alt} />
        <NamedIcon name="TypeScript" icon={SiTypescript} />
        <NamedIcon name="JavaScript" icon={IoLogoJavascript} />
        <NamedIcon name="NodeJs" icon={FaNode} />
        <NamedIcon name="Rust" icon={FaRust} />
        <NamedIcon name="Solidity" icon={SiSolidity} />
        <NamedIcon name="NextJs" icon={TbBrandNextjs} />
        <NamedIcon name="TailwindCSS" icon={SiTailwindcss} />
        <NamedIcon name="MongoDB" icon={SiMongodb} />
        <NamedIcon name="PostgreSQL" icon={BiLogoPostgresql} />
        <NamedIcon name="ReactJs" icon={GrReactjs} />
        <NamedIcon name="Docker" icon={SiDocker} />
        <NamedIcon name="Linux" icon={SiLinux} />
      </div>
    </div>
  );
}
