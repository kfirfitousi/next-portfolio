"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Github, Linkedin, FileDown } from "lucide-react";
import { GradientText } from "@/components/gradient-text";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { Stack } from "@/components/stack";
import { Arrow } from "@/components/arrow";
import { Project } from "@/components/project";
import Link from "next/link";

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const container = useRef<HTMLDivElement>(null!);
  const { scrollY, scrollYProgress } = useScroll({ container });

  useEffect(() => {
    // only show projects after render, when container ref is set
    setShowProjects(true);

    container.current.scrollTo(0, 0);

    const set = () => {
      const { height } = container.current.getBoundingClientRect();
      setScreenHeight(height);
    };

    set();
    window.addEventListener("resize", set);

    return () => window.removeEventListener("resize", set);
  }, []);

  const logoScale = useTransform(scrollY, [0, screenHeight], [1, 0.5]);
  const logoX = useTransform(scrollY, [0, screenHeight], ["50vw", "10vw"]);

  const headingOpacity = useTransform(scrollY, [0, screenHeight / 2.5], [1, 0]);
  const headingScale = useTransform(scrollY, [0, screenHeight / 2], [1, 0.2]);
  const headingX = useTransform(
    scrollY,
    [0, screenHeight / 2],
    ["0vw", "40vw"]
  );

  const iconsOpacity = useTransform(
    scrollY,
    [0, screenHeight / 4, screenHeight],
    [0, 0, 1]
  );
  const iconsZIndex = useTransform(
    scrollY,
    [0, screenHeight / 4, screenHeight],
    [-1, -1, 0]
  );

  const aboutScale = useTransform(
    scrollY,
    [0, screenHeight, screenHeight * 1.5],
    [0.5, 1, 0.4]
  );
  const aboutOpacity = useTransform(
    scrollY,
    [0, screenHeight, screenHeight * 1.5],
    [0, 1, 0]
  );

  const navOpacity = useTransform(
    scrollY,
    [
      0,
      screenHeight / 2,
      screenHeight,
      screenHeight * 1.5,
      screenHeight * 4.9,
      screenHeight * 5,
    ],
    [1, 0, 1, 0, 0, 1]
  );
  const arrowRotateZ = useTransform(
    scrollY,
    [0, screenHeight * 4.8, screenHeight * 5],
    [0, 0, 180]
  );
  const aboutLinkOpacity = useTransform(
    scrollY,
    [0, screenHeight / 2, screenHeight],
    [1, 0, 0]
  );
  const projectsLinkOpacity = useTransform(
    scrollY,
    [0, screenHeight, screenHeight * 1.5],
    [1, 1, 0]
  );
  const backToTopOpacity = useTransform(
    scrollY,
    [0, screenHeight * 4.9, screenHeight * 5],
    [0, 0, 1]
  );

  return (
    <>
      {/* Logo */}
      <motion.div
        className="fixed top-8"
        initial={{ x: "50vw", scale: 1 }}
        style={{ x: logoX, scale: logoScale }}
      >
        <Logo className="mx-auto h-fit w-48 sm:w-64" />
      </motion.div>

      {/* Icons */}
      <motion.div
        className="fixed top-16 flex w-full justify-end pr-[10vw]"
        initial={{
          opacity: 0,
          zIndex: -1,
        }}
        style={{
          opacity: iconsOpacity,
          zIndex: iconsZIndex,
        }}
      >
        <div className="flex flex-row space-x-4">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <Link href="https://github.com/kfirfitousi" className="text-accent">
              <Github className="h-8 w-8" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <a href="/Kfir_Fitousi_CV.pdf">
              <FileDown className="h-8 w-8 text-secondary" />
            </a>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <Link
              href="https://www.linkedin.com/in/kfirp/"
              className="text-tertiary"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Bar */}
      <motion.div className="fixed top-[15vh] left-[5vw] hidden sm:block">
        <motion.div
          className="absolute top-0 left-0 z-10 h-[75vh] w-px origin-top bg-accent"
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <div className="h-[75vh] w-px bg-primary bg-opacity-20" />
      </motion.div>

      {/* Nav */}
      <motion.div
        className="fixed bottom-[5vh] left-[50vw] flex -translate-x-1/2 items-center space-x-2 whitespace-nowrap text-primary"
        initial={{ opacity: 1 }}
        style={{ opacity: navOpacity }}
      >
        <motion.a
          href="#about-me"
          className="hover:text-accent"
          initial={{ opacity: 1 }}
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
          className="absolute -bottom-8 left-9 hover:text-accent"
          href="#heading"
          initial={{ opacity: 0 }}
          style={{
            opacity: backToTopOpacity,
          }}
        >
          Back to Top
        </motion.a>
        <motion.a
          href="#project-1"
          className="hover:text-accent"
          initial={{ opacity: 1 }}
          style={{
            opacity: projectsLinkOpacity,
          }}
        >
          Projects
        </motion.a>
      </motion.div>

      <div
        ref={container}
        className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
      >
        {/* Page 1 - Heading */}
        <section
          id="heading"
          className="flex h-screen snap-center flex-col items-center justify-center"
        >
          <motion.div
            className="flex flex-col space-y-2"
            initial={{
              scale: 1,
              opacity: 1,
              x: "0vw",
            }}
            style={{
              scale: headingScale,
              opacity: headingOpacity,
              x: headingX,
            }}
          >
            <section className="flex items-center">
              <Stack className="mr-2 inline h-8 w-8 sm:h-10 sm:w-10" />
              <GradientText className="mx-auto whitespace-nowrap text-center text-3xl font-semibold sm:text-5xl">
                Full Stack Developer
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
          className="flex h-screen snap-start flex-col items-center justify-center"
        >
          <motion.div
            className="mx-auto w-screen px-8 text-center text-2xl font-semibold sm:w-3/4 sm:px-0 sm:text-3xl"
            style={{
              scale: aboutScale,
              opacity: aboutOpacity,
            }}
          >
            <span className="text-accent">Hi! my name is Kfir </span>
            <span className="text-primary">
              and I&apos;m a Full Stack Developer experienced with{" "}
            </span>
            <GradientText className="mx-auto">
              <span className="underline decoration-accent underline-offset-4">
                React
              </span>
              ,{" "}
              <span className="underline decoration-secondary underline-offset-4">
                TypeScript
              </span>{" "}
              and{" "}
              <span className="underline decoration-tertiary underline-offset-4">
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

        {showProjects && (
          <>
            {/* Page 3 - Project 1 */}
            <section
              id="project-1"
              className="flex h-screen snap-start flex-col items-center justify-center"
            >
              <Project container={container} />
            </section>
            {/*  Page 4 - Project 2 */}
            <section
              id="project-2"
              className="flex h-screen snap-start flex-col items-center justify-center"
            >
              <Project container={container} />
            </section>
            {/* Page 5 - Project 3 */}
            <section
              id="project-3"
              className="flex h-screen snap-start flex-col items-center justify-center"
            >
              <Project container={container} />
            </section>
            {/* Page 6 - Project 4 */}
            <section
              id="project-4"
              className="flex h-screen snap-start flex-col items-center justify-center"
            >
              <Project container={container} />
            </section>
          </>
        )}
      </div>
    </>
  );
}
