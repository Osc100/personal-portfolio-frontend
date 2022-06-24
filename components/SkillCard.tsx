import type { FC } from "react";
import { SiPython } from "react-icons/si";

const SkillCard: FC = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <SiPython className="text-7xl xl:text-9xl text-success" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Pyhon!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          doloribus nesciunt hic libero ab ad dolorum aut natus iure minima quia
          autem corporis veniam nisi nemo, laudantium veritatis, possimus
          voluptatibus?
        </p>
      </div>
    </div>
  );
};
export default SkillCard;
