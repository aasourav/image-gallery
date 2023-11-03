import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";

const Image = styled.img`
  width: 100%;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  cursor: move;

  &:hover {
    .imgWrapper {
      opacity: 0.5;
    }
    background-color: #8c8c90;
    border-radius: 5px;
    .checkbox {
      display: flex;
    }
    transition: 0.5s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
`;

const CheckboxWrapper = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  padding: 1.5rem;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
`;

const CardContainer = styled.div`
  border: 2px solid #e2dfdf;
  border-radius: 0.5rem;
  width: 100%;
`;

interface IProps {
  imgSrc: string;
  imgIndex: number;
  isChecked?: boolean;
  className: string;
  draggable?: boolean;
  dragItem: React.MutableRefObject<number | undefined>;
  dragOverItem: React.MutableRefObject<number | undefined>;
  onDragEnd: (e, index) => void;
  onCheckboxChange: (action: {
    index: number;
    whatToDo: "add" | "remove";
  }) => void;
}
const ImageCard: React.FC<IProps> = ({
  imgSrc,
  onCheckboxChange,
  dragItem,
  dragOverItem,
  onDragEnd,
  imgIndex,
  isChecked,
  className,
  draggable,
}) => {
  return (
    <CardWrapper
      className={className}
      draggable={draggable}
      onDragStart={() => (dragItem.current = imgIndex)}
      onDragEnter={() => (dragOverItem.current = imgIndex)}
      onDragEnd={(e) => onDragEnd(e, imgIndex)}
      onDragOver={(e) => e.preventDefault()}
    >
      <CardContainer draggable className="imgWrapper">
        <Image src={imgSrc} />
      </CardContainer>
      <CheckboxWrapper isVisible={isChecked} className="checkbox">
        <Checkbox
          isChecked={isChecked}
          onChange={(action) =>
            onCheckboxChange({ index: imgIndex, whatToDo: action })
          }
        />
      </CheckboxWrapper>
    </CardWrapper>
  );
};

export default ImageCard;
