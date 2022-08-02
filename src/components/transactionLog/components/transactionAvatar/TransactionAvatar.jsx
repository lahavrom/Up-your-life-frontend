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

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const uploadImage = async () => {
    setNewUserPhoto(URL.createObjectURL(inputImage.current.files[0]));
    setPhoto(true);
    const convertedFile = await convertToBase64(newUserPhoto);

    await axios.post("localhost:3001/users/upload-image", {
      image: convertedFile,
      imageName: userId,
    });
  };

  return !photo ? (
    <>
      <input
        type="file"
        ref={inputImage}
        style={{ display: "none" }}
        onChange={() => uploadImage()}
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
