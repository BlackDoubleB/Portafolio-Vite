import { TargetAbout } from "./TargetAbout";
import { TargetSkills } from "./TargetSkills";
export const Hero = () => {
  return (
    <section id="inicio">
      <div className=" w-full sm:grid grid-cols-[auto_auto] justify-center max-w-[1200px] gap-5 md:gap-10 2xl:gap-20">
        <div className="hidden sm:block ">
          <TargetAbout />
        </div>
        <TargetSkills />
      </div>
    </section>
  );
};
