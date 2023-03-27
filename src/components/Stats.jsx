import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 md:mt-0 mt-10`}
  >
    {stats.map((stat) => (
      <div
        id={stat.id}
        className={`flex-1 flex items-center justify-center md:justify-start flex-row m-3`}
      >
        <h4 className="font-poppins text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
          {stat.value}
        </h4>
        <p className="font-poppins text-white font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
