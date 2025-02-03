import Image from "next/image";
import { Fragment } from "react";
import nextJSImage from "../../assets/nextjs-icon.png";

export default function GallaryPage() {
  return (
    <Fragment>
      <p className="text-center text-2xl">Regular Image Tag</p>
      <img
        src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
        alt="Next.js image"
        className="m-auto"
        width={500}
        height={500}
      />
      <p className="text-center text-2xl">Next.js Image component</p>
      <Image
        src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
        alt="Next.js image"
        width={500}
        height={500}
        className="m-auto"
      />
      <p className="text-center text-2xl">Local Image</p>
      <Image
        src={nextJSImage}
        alt="Next.js image"
        width={500}
        height={500}
        className="m-auto"
      />
    </Fragment>
  );
}
