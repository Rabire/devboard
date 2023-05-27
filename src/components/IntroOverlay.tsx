import DevBoardLogo from "./DevBoardLogo";
import DevBoardLabel from "./svg/DevBoardLabel";

const IntroOverlay = () => (
  <div className="absolute inset-0 bg z-50  flex items-center justify-center p-5 pointer-events-none anim-intro-overlay">
    <div className="flex flex-col items-center gap-10 max-w-4xl">
      <div className="hidden tablet:block">
        <DevBoardLogo size="lg" pathColor="primary" />
      </div>

      <div className="block tablet:hidden">
        <DevBoardLogo size="md" pathColor="primary" />
      </div>
      <DevBoardLabel />
      <p className="font-bold text-xl tablet:text-2xl text-center">
        Boostez votre productivité freelance grâce au tableau de bord dédié aux
        codeurs passionnés !
      </p>
    </div>
  </div>
);

export default IntroOverlay;
