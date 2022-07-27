import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { Toast } from "monday-ui-react-core";

const ErrorToast = ({ isVisible, message }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const onOpenToast = useCallback(() => {
    setIsToastOpen(true);
  }, [setIsToastOpen]);

  const onCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, [setIsToastOpen]);

  useEffect(() => {
    isVisible ? onOpenToast() : onCloseToast();
  }, [isVisible, onOpenToast, onCloseToast]);

  return (
    <Toast
      open={isToastOpen}
      type={Toast.types.NEGATIVE}
      autoHideDuration={10000}
      onClose={onCloseToast}
    >
      {message}
    </Toast>
  );
};

ErrorToast.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string,
};

export default ErrorToast;
