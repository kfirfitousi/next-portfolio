"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Github, Linkedin, FileDown } from "lucide-react";
import { GradientText } from "@/components/gradient-text";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { Stack } from "@/components/stack";
import { Arrow } from "@/components/arrow";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Log scroll progress for debugging
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      console.log(v);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const logoScale = useTransform(scrollYProgress, [0, 1 / 5], [1, 0.5]);
  const logoX = useTransform(scrollYProgress, [0, 1 / 5], ["50vw", "10vw"]);

  const headingOpacity = useTransform(scrollYProgress, [0, 1 / 20], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 1 / 5 / 2], [1, 0.2]);

  const iconsOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 10, 1 / 5],
    [0, 0, 1]
  );

  const aboutScale = useTransform(
    scrollYProgress,
    [0, 1 / 5, 1 / 3],
    [0.5, 1, 0.01]
  );
  const aboutOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 5, 1 / 3],
    [0, 1, 0]
  );

  const arrowOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 12, 1 / 7, 2 / 10, 1 / 4, 19 / 20, 1],
    [1, 0, 0, 1, 0, 0, 1]
  );
  const arrowRotateZ = useTransform(
    scrollYProgress,
    [0, 18 / 20, 19 / 20],
    [0, 0, 180]
  );
  const aboutLinkOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 5 / 2, 1 / 3],
    [1, 0, 0]
  );
  const projectsLinkOpacity = useTransform(
    scrollYProgress,
    [0, 1 / 2, 1],
    [1, 1, 0]
  );
  const backToTopOpacity = useTransform(
    scrollYProgress,
    [0, 18 / 20, 19 / 20],
    [0, 0, 1]
  );

  return (
    <>
      {/* Logo */}
      <motion.div
        className="fixed top-8"
        style={{ x: logoX, scale: logoScale }}
      >
        <Logo className="mx-auto h-fit w-48 sm:w-64" />
      </motion.div>

      {/* Icons */}
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

      {/* Scroll Bar */}
      <motion.div className="fixed top-[15vh] left-[5vw]">
        <motion.div
          className="absolute top-0 left-0 z-10 h-[75vh] w-px origin-top bg-accent"
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <div className="h-[75vh] w-px bg-primary bg-opacity-20" />
      </motion.div>

      {/* Arrow Down */}
      <motion.div
        className="fixed bottom-[5vh] left-[50vw] flex -translate-x-1/2 items-center space-x-2 text-primary"
        style={{ opacity: arrowOpacity }}
      >
        <motion.a
          href="#about-me"
          style={{
            opacity: aboutLinkOpacity,
          }}
        >
          About Me
        </motion.a>
        <motion.div style={{ rotateZ: arrowRotateZ }}>
          <Arrow className="h-14" />
        </motion.div>
        <motion.a
          className="absolute -bottom-6 left-9"
          href="#heading"
          style={{
            opacity: backToTopOpacity,
          }}
        >
          Back to Top
        </motion.a>
        <motion.a
          href="#project-1"
          style={{
            opacity: projectsLinkOpacity,
          }}
        >
          Projects
        </motion.a>
      </motion.div>

      {/* Page 1 - Heading */}
      <section
        id="heading"
        className="flex h-screen flex-col items-center justify-center"
      >
        <motion.div
          className="flex flex-col space-y-2"
          style={{
            scale: headingScale,
            opacity: headingOpacity,
          }}
        >
          <section className="flex items-center">
            <Stack className="mr-2 inline h-8 w-8" />
            <GradientText className="mx-auto text-center text-3xl font-semibold sm:text-4xl">
              <span>Full Stack Developer</span>
            </GradientText>
          </section>

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
      </section>

      {/* Page 2 - About Me */}
      <section
        id="about-me"
        className="flex h-screen flex-col items-center justify-center"
      >
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
      </section>

      {/* Page 3 - Project 1 */}
      <section
        id="project-1"
        className="flex h-screen flex-col items-center justify-center"
      >
        <motion.div className="flex h-[60vh] w-3/4 flex-row space-x-2">
          <motion.div className="w-2/3 bg-slate-600" />
          <motion.div className="mx-auto w-1/3 text-3xl font-semibold text-primary">
            Project 1
          </motion.div>
        </motion.div>
      </section>

      {/* Page 4 - Project 2 */}
      <section
        id="project-2"
        className="flex h-screen flex-col items-center justify-center"
      >
        <motion.div className="flex h-[60vh] w-3/4 flex-row space-x-2">
          <motion.div className="w-2/3 bg-slate-600" />
          <motion.div className="mx-auto w-1/3 text-3xl font-semibold text-primary">
            Project 2
          </motion.div>
        </motion.div>
      </section>

      {/* Page 5 - Project 3 */}
      <section
        id="project-3"
        className="flex h-screen flex-col items-center justify-center"
      >
        <motion.div className="flex h-[60vh] w-3/4 flex-row space-x-2">
          <motion.div className="w-2/3 bg-slate-600" />
          <motion.div className="mx-auto w-1/3 text-3xl font-semibold text-primary">
            Project 3
          </motion.div>
        </motion.div>
      </section>

      {/* Page 6 - Project 4 */}
      <section
        id="project-4"
        className="flex h-screen flex-col items-center justify-center"
      >
        <motion.div className="flex h-[60vh] w-3/4 flex-row space-x-2">
          <motion.div className="w-2/3 bg-slate-600" />
          <motion.div className="mx-auto w-1/3 text-3xl font-semibold text-primary">
            Project 4
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
