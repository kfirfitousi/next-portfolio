"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { Github, Linkedin, FileDown, ArrowDown } from "lucide-react";
import { GradientText } from "../components/gradient-text";
import { Logo } from "../components/logo";
import { Button } from "../components/button";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const logoX = useTransform(scrollYProgress, [0, 1 / 4], ["50vw", "10vw"]);
  const logoScale = useTransform(scrollYProgress, [0, 1 / 4], [1, 0.5]);

  const iconsOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 4, 1 / 3],
    [0, 0.2, 1]
  );

  const headingScale = useTransform(scrollYProgress, [0, 1 / 5], [1, 0.5]);
  const headingOpacity = useTransform(scrollYProgress, [0, 1 / 5], [1, 0]);

  const aboutScale = useTransform(
    scrollYProgress,
    [0, 1 / 2, 4 / 5],
    [0.5, 1, 0.5]
  );
  const aboutOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 2, 4 / 5],
    [0, 1, 0]
  );

  return (
    <>
      <motion.div
        className="fixed top-8"
        style={{ x: logoX, scale: logoScale }}
      >
        <Logo className="mx-auto h-fit w-48 sm:w-64" />
      </motion.div>

      <motion.div
        className="fixed top-16 flex w-full justify-end pr-[10vw]"
        style={{
          opacity: iconsOpacity,
        }}
      >
        <div className="flex flex-row space-x-4">
          <Link href="" className="text-accent">
            <Github className="h-8 w-8" />
          </Link>

          <FileDown className="h-8 w-8 text-secondary" />

          <Link href="" className="text-tertiary">
            <Linkedin className="h-8 w-8" />
          </Link>
        </div>
      </motion.div>

      <motion.div className="fixed top-[15vh] left-[5vw] h-[75vh] w-0.5">
        <motion.div
          className="absolute top-0 left-0 z-10 h-[75vh] w-0.5 origin-top bg-accent"
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <div className="h-[75vh] bg-primary bg-opacity-20" />
      </motion.div>

      <div className="flex h-screen flex-col items-center justify-center">
        <motion.div
          className="flex flex-col space-y-2"
          style={{
            scale: headingScale,
            opacity: headingOpacity,
          }}
        >
          <GradientText className="mx-auto text-center text-3xl font-semibold sm:text-4xl">
            Full Stack Developer
          </GradientText>
          <div className="flex flex-row justify-center space-x-5">
            <Button
              label="GitHub"
              href="https://github.com/kfirfitousi"
              color="accent"
              icon={<Github />}
            />
            <Button
              label="CV"
              href="/Kfir_Fitousi_CV.pdf"
              color="secondary"
              icon={<FileDown />}
            />
            <Button
              label="LinkedIn"
              href="https://linkedin.com/in/kfirp"
              color="tertiary"
              icon={<Linkedin />}
            />
          </div>
        </motion.div>
        {/* <section className="mx-auto mb-4 self-end text-primary">
          <ArrowDown />
        </section> */}
      </div>

      <div className="flex h-screen flex-col items-center justify-center space-y-3">
        <motion.div
          className="mx-auto w-screen px-8 text-center text-2xl font-semibold sm:w-3/4 sm:px-0 sm:text-3xl"
          style={{
            scale: aboutScale,
            opacity: aboutOpacity,
          }}
        >
          <span className="text-accent">Hi, my name is Kfir </span>
          <span className="text-primary">
            and I&apos;m a Full Stack Developer{" "}
          </span>
          <span className="text-primary">experienced with </span>
          <GradientText className="mx-auto block">
            <span className="underline decoration-primary underline-offset-4">
              React
            </span>
            ,{" "}
            <span className="underline decoration-primary underline-offset-4">
              TypeScript
            </span>{" "}
            and{" "}
            <span className="underline decoration-primary underline-offset-4">
              Next.js
            </span>
            .
            <br />
          </GradientText>
          <span className="text-primary">
            Building for the web is my passion.
          </span>
        </motion.div>
      </div>

      <div className="flex h-screen flex-col items-center justify-center space-y-3">
        <motion.div className="mx-auto w-3/4 text-center text-3xl font-semibold">
          <span className="text-primary">I&apos;m currently working on </span>
        </motion.div>
      </div>
    </>
  );
}
