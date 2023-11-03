import React, { useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import ImageCard from "../organisms/ImageCard";

const images = [
  "/images/image-1.webp",
  "/images/image-2.webp",
  "/images/image-3.webp",
  "/images/image-4.webp",
  "/images/image-5.webp",
  "/images/image-6.webp",
  "/images/image-7.webp",
  "/images/image-8.webp",
  "/images/image-9.webp",
  "/images/image-10.jpeg",
  "/images/image-11.jpeg",
];

const MainContainer = styled.main`
  margin: 1.5rem;
  padding: 0;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  border-radius: 10px;
  min-height: 80px;
`;

const MainCard = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 250px);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;

  .img-0 {
    grid-column: 1 / 3;
    grid-row: 1/3;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Gallery: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [imageSources, setImageSources] = useState(images);

  const onImageSelectChange = (action: {
    index: number;
    whatToDo: "add" | "remove" | "removeAll";
  }) => {
    const { index, whatToDo } = action;
    setSelectedItems((prev) =>
      whatToDo === "add"
        ? [...prev, index]
        : whatToDo === "removeAll"
        ? []
        : [...prev.filter((data) => data !== index)]
    );
  };

  const onRemoveImages = () => {
    setImageSources((prev) =>
      prev.filter((_img, idx) => !selectedItems.includes(idx))
    );
  };

  const dragItem = React.useRef<number>();
  const dragOverItem = React.useRef<number>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>, _index: number) => {
    console.log("e:", e);
    handleSortImages();
  };

  const handleSortImages = () => {
    if (dragItem?.current === undefined || dragOverItem.current === undefined)
      return;

    const tempImages = [...imageSources];
    const draggedItemContents = tempImages.splice(dragItem?.current, 1)[0];
    tempImages.splice(dragOverItem.current, 0, draggedItemContents);
    dragItem.current = undefined;
    dragOverItem.current = undefined;

    setImageSources(tempImages);
  };

  return (
    <MainContainer>
      <Header
        onChange={(action) =>
          onImageSelectChange({ index: -1, whatToDo: action })
        }
        onRemoveImages={onRemoveImages}
        isCheckbox={!!selectedItems.length}
        numberOfFile={selectedItems.length}
      />
      <FlexContainer>
        <MainCard>
          {imageSources.map((image, idx) => (
            <ImageCard
              className={`img-${idx}`}
              dragItem={dragItem}
              dragOverItem={dragOverItem}
              draggable={true}
              onDragEnd={onDragEnd}
              onCheckboxChange={onImageSelectChange}
              imgIndex={idx}
              imgSrc={image}
              isChecked={selectedItems.includes(idx)}
            />
          ))}
        </MainCard>
      </FlexContainer>
    </MainContainer>
  );
};

export default Gallery;
