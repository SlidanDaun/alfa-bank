import style from "./index.module.css"
import GamePageImg from "../../assets/img/GamePage.svg"
import { useNavigate } from "react-router-dom";


export const GamePage = () => {
  const navigate = useNavigate(); // Инициализируем навигацию

  const handleCardClick = () => {
    navigate("/"); // Навигация к GamePage
  };
    return(
        <div className={style.GamePageContainer} onClick={handleCardClick}> 
            <img src={GamePageImg} />
        </div>
    );
}