import style from "./index.module.css";
import Stories from "stories-react";

import "stories-react/dist/index.css";

export const StorieComponent = ({ stories, isOpen, setIsOpen }) => {
  return (
    <div className={style.overlay} >
      <div className={style.container} >
        <Stories
          stories={stories}
          defaultInterval={1500} // Интервал времени, через который будут переключаться истории
          width={432} 
          height={768} 
          onStoryEnd={(story, index) => {
            if (index === stories.length - 1) {
              setIsOpen(false);
            }
          }}
          onAllStoriesEnd={() => setIsOpen(false)} // Закрыть окно после завершения всех историй
          onClose={() => setIsOpen(false)} // Закрыть окно по нажатию на крестик
        >
        </Stories >
      </div>
    </div>
  );
};
