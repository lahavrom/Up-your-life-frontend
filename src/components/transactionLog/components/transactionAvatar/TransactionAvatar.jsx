import { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "../../../../redux/account/selectors";
import { Avatar } from "monday-ui-react-core";

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "eu-west-3",
});
const S3 = new AWS.S3({ params: { Bucket: "up-your-life" } });

const generateUserData = (users, userId) => {
  const user = users.find((elem) => elem.userId === userId);
  let userPhoto = null;

  try {
    // if user.image === '' -> userPhoto = null
    // else user.image
    userPhoto = S3.getSignedUrl("getObject", { Key: `images/${userId}` });
  } catch (err) {
    console.log(err);
  }

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
