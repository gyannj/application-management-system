import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

// const custom404 = (props: Props) => {
//   return;
//   <div className="w-full h-full text-textColor">
//     {/* <Image
//       src="/404animation.gif"
//       width={100}
//       height={100}
//       alt="404 animation"
//     /> */}
//     404 page not found
//   </div>;
// };

// export default custom404;

export default function custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-textColor gap-32">
      {/* <Image
        src="/404animation.gif"
        width={1200}
        height={1200}
        alt="Picture of the author"
      /> */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="font-black text-purple-800  text-9xl">404</div>
        <div className="font-bold text-4xl">Page Not Found</div>
      </div>
      <div className="flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700 border-solid border-[1px] border-sky-300 font-md">
        <Link href="/" className="font-medium text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
