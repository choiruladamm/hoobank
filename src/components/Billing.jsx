import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient*/}
      <div className="white__gradient absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full" />
      <div className="pink__gradient absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="mt-5 flex flex-row flex-wrap sm:mt-10">
        <img
          src={apple}
          alt="appstore"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="googleplay"
          className="w-[144px] h-[43px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
