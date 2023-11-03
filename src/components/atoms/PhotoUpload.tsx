import React from "react";
import styled from "styled-components";
import GallerySVG from "../../assets/GallerySVG";

const StyledInput = styled.label`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 2px dotted #c3c3c7;
  border-radius: 5px;
  cursor: pointer;
`;

const PhotoUpload: React.FC = () => {
  return (
    <>
      <StyledInput htmlFor="upload-photo">
        <GallerySVG />
        <h3 style={{ fontWeight: "400" }}>Add Images</h3>
      </StyledInput>
      <input
        style={{ display: "none" }}
        type="file"
        name="photo"
        id="upload-photo"
      />
    </>
  );
};

export default PhotoUpload;
