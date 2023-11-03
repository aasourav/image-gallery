import styled from "styled-components";

const StyledCheckBox = styled.input<{ height?: string; width?: string }>`
  height: ${({ height }) => height || "20px"};
  width: ${({ width }) => width || "20px"};
  cursor: pointer;
`;

interface IProps {
  onChange: (action: "add" | "remove") => void;
  isChecked?: boolean;
  height?: string;
  width?: string;
}
const Checkbox = ({ isChecked, onChange, height, width }: IProps) => {
  return (
    <StyledCheckBox
      type="checkbox"
      height={height}
      width={width}
      checked={isChecked}
      onChange={(e) => onChange(e.target.checked ? "add" : "remove")}
    />
  );
};

export default Checkbox;
