// import styles from "./transactionAvatar.module.css";
import { Avatar } from "monday-ui-react-core";

const TransactionAvatar = (userId) => {
  const getUserData = (userId) => {
    // return real user data
    return { userName: "Lahav Rom", userText: "LR", userPhoto: null };
  };

  const { userName, userText, userPhoto } = getUserData(userId);
  return !userPhoto ? (
    <Avatar
      size={Avatar.sizes.MEDIUM}
      type={Avatar.types.TEXT}
      text={userText}
      backgroundColor={Avatar.colors.DARK_BLUE}
      ariaLabel={userName}
    />
  ) : (
    <Avatar
      size={Avatar.sizes.MEDIUM}
      src={""}
      type={Avatar.types.IMG}
      ariaLabel={userName}
    />
  );
};

export default TransactionAvatar;
