import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  buttonText: string;
  iconLeft?: string;
  iconRight?: string;
  comingSoon?: boolean;
  link?: string;
};

export default function ServiceCard({
  title,
  description,
  buttonText,
  iconLeft,
  iconRight,
  comingSoon,
  link,
}: ServiceCardProps) {
  return (
    <div className="relative w-[270px] h-[240px] bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] px-[22px] pt-[22px] pb-[36px] flex flex-col">
      {comingSoon && (
        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-black text-white text-[12px] px-[12px] py-[4px] rounded-full">
          Coming Soon
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[10px]">
          {iconLeft && (
            <Image
              src={iconLeft}
              alt=""
              width={42}
              height={42}
              className="object-contain"
            />
          )}
        </div>

        {iconRight && (
          <Image
            src={iconRight}
            alt=""
            width={54}
            height={54}
            className="object-contain opacity-70"
          />
        )}
      </div>

      <div className="mt-[14px]">
        <h3 className="text-[16px] font-bold text-black">{title}</h3>
        <p className="mt-[6px] text-[12px] leading-[150%] text-black/50">
          {description}
        </p>
      </div>

      <div className="mt-auto flex justify-center">
        {link && !comingSoon ? (
          <Link
            href={link}
            className="h-[40px] w-full rounded-full border-2 border-black text-black text-[13px] font-medium flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            {buttonText}
          </Link>
        ) : (
          <div className="h-[40px] w-full rounded-full border-2 border-black text-black text-[13px] font-medium flex items-center justify-center">
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
}