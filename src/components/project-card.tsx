import { CardContainer, CardItem } from "./ui/3d-card";

export const ThreeDCardDemo = () => {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="w-full">
        <img
          src="https://i.imgur.com/XfYOeHp.png"
          height="1000"
          width="1000"
          alt="thumbnail"
          className="object-cover rounded-xl group-hover/card:shadow-xl w-[860px] h-[480px]"
        />
      </CardItem>
    </CardContainer>
  );
};
