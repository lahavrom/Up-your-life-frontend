import { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "../../../../redux/account/selectors";
import { Avatar } from "monday-ui-react-core";
import { getImage } from "../../../../helpers/s3";

const generateUserData = (users, userId) => {
  const user = users.find((elem) => elem.userId === userId);
  const userPhoto = user.isProfileImage ? getImage(userId) : null;

  return {
    userName: `${user.firstName} ${user.lastName}`,
    userText: `${user.firstName[0]}${user.lastName[0]}`,
    userPhoto,
  };
};

const TransactionAvatar = ({ userId }) => {
  const users = useSelector(selectUsers);

  const { userName, userText, userPhoto } = useMemo(
    () => generateUserData(users, userId),
    [users, userId]
  );

  return !userPhoto ? (
    <>
      <Avatar
        size={Avatar.sizes.MEDIUM}
        type={Avatar.types.TEXT}
        text={userText}
        backgroundColor={Avatar.colors.DARK_BLUE}
        ariaLabel={userName}
      />
    </>
  ) : (
    <Avatar
      size={Avatar.sizes.MEDIUM}
      src={userPhoto}
      type={Avatar.types.IMG}
      ariaLabel={userName}
    />
  );
};

export default TransactionAvatar;
