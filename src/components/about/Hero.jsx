import { TargetAbout } from "./TargetAbout";
import { TargetSkills } from "./TargetSkills";
export const Hero = () => {
  return (
    <div id="inicio" className=" max-w-[1200px] scroll-mt-20">
    <div className=" ">
        <div className=" sm:grid grid-cols-[0.4fr_1fr] gap-5 lg:gap-10 font-encode_sans_expanded font-thin">
        <div className="hidden sm:block">
          <TargetAbout />
        </div>
        <TargetSkills />
      </div>
    </div>
    </div>
  );
};
