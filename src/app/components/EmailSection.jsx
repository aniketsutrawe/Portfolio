"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";


function sendEmail() {
  var mail = 'mailto:aniketsutrawe28@gmail.com';
  var a = document.createElement('a');
  a.href = mail;
  a.click();
};

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative max-sm:mb-40"
    >
      
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 max-sm:mt-16 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="font-bold text-white my-2 text-3xl max-sm:text-2xl">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-screen-md text-2xl max-sm:text-lg">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you! ❤️
        </p>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/aniketsutrawe" target="blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          {/* <Link href="mailto: aniketsutrawe28@gmail.com">
            <Image src={GmailIcon} alt="Gmail Icon" />            Issue found in TabButton section after clicking on this link tag
          </Link> */}

          <div onClick={sendEmail}>
            <Image src={GmailIcon} alt="Gmail Icon" />
          </div>

          <Link href="https://www.linkedin.com/in/aniket-sutrawe-57744b171" target="blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>

        </div>
      </div>
      <div className="w-1 lg:h-[340px]" id="behalf_of_email_Section"></div>
      
    </section>
  );
};

export default EmailSection;
