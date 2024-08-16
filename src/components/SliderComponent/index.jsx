import style from "./index.module.css";



export const SliderComponent = ({logos}) => {
  return (
    <div className={style.logoCarousel}>
      <img className={style.live} src={logos[0]}></img>
      <img className={style.rostics} src={logos[1]}></img>
      <img className={style.bk} src={logos[2]}></img>
      <img className={style.samokat} src={logos[3]}></img>
      <img className={style.mc} src={logos[4]}></img>
      <img className={style.dodo} src={logos[5]}></img>
      <img className={style.vkus} src={logos[6]}></img>
      <img className={style.surf} src={logos[7]}></img>
      <img className={style.potato} src={logos[8]}></img>
    </div>
  );
};
