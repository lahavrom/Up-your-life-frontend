import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../../redux/transactions/actions/deleteTransaction";
import { IconButton, Button } from "monday-ui-react-core";
import { Edit, Delete } from "monday-ui-react-core/dist/allIcons";

const TransactionIcons = ({ onEditTransaction, id, isFixed }) => {
  const dispatch = useDispatch();

  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const onDeleteTransaction = useCallback(() => {
    dispatch(deleteTransaction(id, isFixed));
    setShowDeleteBtn(false);
  }, [dispatch, id, isFixed]);

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
        onClick={onDeleteTransaction}
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
