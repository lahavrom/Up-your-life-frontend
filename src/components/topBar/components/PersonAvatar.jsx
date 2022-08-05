import { Avatar } from "monday-ui-react-core";
import lahav_pic from "../../../assets/lahav_pic.png";

const PersonAvatar = () => {
  return (
    <Avatar
      size={Avatar.sizes.MEDIUM}
      type={Avatar.types.TEXT}
      //   src={}
      //   text={"LR"}
      backgroundColor={Avatar.colors.DARK_BLUE}
      ariaLabel={"Lahav Rom"}
    />
  );
};

export default PersonAvatar;
