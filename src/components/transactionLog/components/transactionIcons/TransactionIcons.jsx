import { useState } from "react";
import { IconButton, Button } from "monday-ui-react-core";
import { Edit, Delete } from "monday-ui-react-core/dist/allIcons";

const TransactionIcons = ({ onEditTransaction }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return showDeleteBtn ? (
    <>
      <Button
        size={Button.sizes.SMALL}
        kind={Button.kinds.SECONDARY}
        onClick={() => setShowDeleteBtn(false)}
      >
        Cancel
      </Button>
      <Button
        size={Button.sizes.SMALL}
        color={Button.colors.NEGATIVE}
        onClick={""}
      >
        Delete
      </Button>
    </>
  ) : (
    <>
      <IconButton
        icon={Edit}
        size={IconButton.sizes.XS}
        ariaLabel="Edit Transaction"
        onClick={() => onEditTransaction()}
      />
      <IconButton
        icon={Delete}
        size={IconButton.sizes.XS}
        tooltipContent="Delete Transaction"
        onClick={() => setShowDeleteBtn(true)}
      />
    </>
  );
};

export default TransactionIcons;
