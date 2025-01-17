import { Pencil1Icon } from "@modulz/radix-icons";
import { SetStateAction } from "react";
import { styled } from "../../../stitches.config";
import ClickEvent from "../../../types/events/clickEvent";
import { StyledIconButton } from "../../Primitives/Button";

const StyledPencilIcon = styled(Pencil1Icon, { size: "$15" });

interface EditItemProps {
  editText: boolean;
  setEditText: (value: SetStateAction<boolean>) => void;
}
const EditItem: React.FC<EditItemProps> = ({ editText, setEditText }) => {
  const handleEditText = (event: ClickEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setEditText(!editText);
  };

  return (
    <StyledIconButton variant="ghost" onClick={handleEditText}>
      <StyledPencilIcon />
    </StyledIconButton>
  );
};

export default EditItem;
