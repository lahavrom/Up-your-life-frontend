import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { Toast } from "monday-ui-react-core";

const SuccessToast = ({ isVisible, message }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const onOpenToast = useCallback(() => {
    setIsToastOpen(true);
  }, [setIsToastOpen]);

  const onCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, [setIsToastOpen]);

  useEffect(() => {
    isVisible && message ? onOpenToast() : onCloseToast();
  }, [isVisible, message, onOpenToast, onCloseToast]);

  return (
    <Toast
      open={isToastOpen}
      type={Toast.types.POSITIVE}
      autoHideDuration={10000}
      onClose={onCloseToast}
    >
      {message}
    </Toast>
  );
};

SuccessToast.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string,
};

export default SuccessToast;
