import Image from "next/image";
import Img1 from "../../public/img1.png";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Image
          className="w-3/6 h-3/4 absolute z-0 m-52 mt-10"
          src={Img1}
          alt="img"
        />
        <div>
          <h1 className="z-10 absolute text-primary text-[200px] font-bold ml-[36rem] mt-5">
            404
          </h1>
          <h1 className="z-10 absolute text-6xl font-bold ml-[36rem] mt-64">
            Page Not Found
          </h1>
        </div>
      </div>
      <div className="mt-[500px] text-center text-4xl">
        <h1 className="  m-6">Sorry, the page you are looking for does not exist.</h1>
        <h1 className="">Please go back to the previous page or try searching something else.</h1>
      </div>
    </div>
  );
}
