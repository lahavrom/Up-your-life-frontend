import { useState, useRef } from "react";
import axios from "axios";
import { Avatar } from "monday-ui-react-core";

const TransactionAvatar = (userId) => {
  const getUserData = (userId) => {
    // return real user data
    return { userName: "Lahav Rom", userText: "LR", userPhoto: null };
  };

  const { userName, userText, userPhoto } = getUserData(userId);
  const inputImage = useRef(null);
  const [newUserPhoto, setNewUserPhoto] = useState(userPhoto);
  const [photo, setPhoto] = useState(userPhoto);

  const uploadImage = async () => {
    setNewUserPhoto(URL.createObjectURL(inputImage.current.files[0]));
    setPhoto(true);
    const formData = new FormData();
    formData.append("image", inputImage.current.files[0], userId);

    await axios.post("http://localhost:3001/users/upload-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return !photo ? (
    <>
      <input
        type="file"
        ref={inputImage}
        style={{ display: "none" }}
        onChange={() => {
          uploadImage();
        }}
      />
      <Avatar
        onClick={() => inputImage.current.click()}
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
      src={newUserPhoto}
      type={Avatar.types.IMG}
      ariaLabel={userName}
    />
  );
};

export default TransactionAvatar;
