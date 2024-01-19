import Image from "next/image";

const TestimonialItem = ({imgSrc, message, name}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:px-16 ">
      <div className=" min-w-[114px] relative">
        <Image
          width="114"
          height="96"
          src={`/images/testimoni-bg-user.png`}
          alt="bg blue testimoni user"
          className=""
        ></Image>
        <Image
          width="96"
          height="96"
          src={imgSrc}
          alt="testimoni 1"
          className="absolute top-2 left-2 rounded-full"
        ></Image>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-[582px]">
        <p className="text-[22px]">{message}</p>
        <p className="text-md">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
