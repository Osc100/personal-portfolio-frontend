import { FC, MouseEventHandler, useEffect, useRef, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';

interface props {
  children: JSX.Element;
  title: string;
  description: string;
  containerClasses?: string;
  descriptionLeft: boolean;
  isActive: boolean;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

const SkillCard: FC<props> = (props) => {
  const description = useRef(props.description);
  const [textIndex, setTextIndex] = useState(0);
  const initialWait = 550;
  let typeWait = useRef(initialWait);

  useEffect(() => {
    if (props.isActive && textIndex <= props.description.length) {
      setTimeout(() => {
        description.current = props.description.slice(0, textIndex);
        setTextIndex(textIndex + 1);
      }, typeWait.current);
    }
    else if (!props.isActive) {
      typeWait.current = initialWait;
      setTextIndex(0);
    }
    if (textIndex > 0) typeWait.current = 25;

  }, [textIndex, props.isActive, props.description]);

  return (
    <div>
      <div
        className={`transition card w-80 h-64 bg-base-200 ${!props.isActive && 'shadow-xl'} 
        gap-3 ${props.containerClasses}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <figure className="pt-8 flex-1">{props.children}</figure>
        <div className="card-body flex-1">
          <h2 className="card-title self-center text-[1.3rem]">{props.title}</h2>
        </div>

      </div>

      <Transition
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={`w-80 card opacity-0 z-0 mt-[-16rem] scale-[1.4] h-64 bg-base-200`}
        show={props.isActive}
        appear={props.isActive}
        enter="transition ease-in-out delay-700 duration-500"
        enterTo={`${props.descriptionLeft ? 'translate-x-[130%]' : '-translate-x-[130%]'} 
                    z-20 opacity-100`}
        leave="transition duration-300"
      >
        <div className="mt-8 mx-10">
          {description.current}
        </div>
      </Transition>
    </div>

  );
};
export default SkillCard;
