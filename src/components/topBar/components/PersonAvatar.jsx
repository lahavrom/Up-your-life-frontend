import { useSelector } from "react-redux";

import { selectUser } from "../../../redux/user/selectors";
import { Avatar } from "monday-ui-react-core";
import { Person } from "monday-ui-react-core/dist/allIcons";
import { getImage } from "../../../helpers/s3";

const PersonAvatar = () => {
  const { userId, isProfileImage } = useSelector(selectUser);

  return isProfileImage ? (
    <Avatar
      size={Avatar.sizes.MEDIUM}
      type={Avatar.types.IMG}
      src={getImage(userId)}
    />
  ) : (
    <Person />
  );
};

export default PersonAvatar;
