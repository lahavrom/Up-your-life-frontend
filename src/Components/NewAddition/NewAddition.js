import "./NewAddition.css";
import {
  DialogContentContainer,
  Heading,
  Button,
  TextField,
  Toast,
} from "monday-ui-react-core";
import { Description } from "monday-ui-react-core/dist/allIcons";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RadioButtonWrapper from "../radioButtonWrapper/RadioButtonWrapper";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState, useCallback } from "react";

function NewAddition({ addType, fixed, modalVisible, setModalVisible }) {
  const [submition, setSubmition] = useState({
    description: null,
    amount: null,
    category: null,
    startDate: null,
    endDate: null,
  });
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const openToastCallback = useCallback(() => {
    setLoadingSubmit(false);
    setOpenToast((openToast) => !openToast);
  }, [setOpenToast]);
  const toastCloseCallback = useCallback(
    () => setOpenToast(false),
    [setOpenToast]
  );

  const radioButtons = [
    { icon: HomeOutlinedIcon, name: "Rent" },
    { icon: FastfoodOutlinedIcon, name: "Food" },
    { icon: DirectionsCarFilledOutlinedIcon, name: "Car" },
    { icon: ConstructionOutlinedIcon, name: "Construction" },
    { icon: PetsOutlinedIcon, name: "Pets" },
    { icon: SchoolOutlinedIcon, name: "School" },
    { icon: ShoppingBagOutlinedIcon, name: "Shopping" },
    { icon: LuggageOutlinedIcon, name: "Vacation" },
    { icon: MoreHorizIcon, name: "Other" },
  ];

  const handleSubmit = async () => {
    setLoadingSubmit(true);
    for (const key in submition) {
      if (fixed) {
        if (!submition[key]) {
          openToastCallback();
          return;
        }
      } else {
        if (key !== "startDate" && key !== "endDate" && !submition[key]) {
          openToastCallback();
          return;
        }
      }
    }

    // submit to DB

    setLoadingSubmit(false);
    Object.keys(submition).forEach((key) => (submition[key] = null));
    setModalVisible(false);
  };

  return modalVisible ? (
    <>
      <Toast
        open={openToast}
        type={Toast.types.NEGATIVE}
        autoHideDuration={5000}
        onClose={toastCloseCallback}
        className="monday-storybook-toast_wrapper"
      >
        Invalid input!
      </Toast>

      <div className="darkBG" onClick={() => setModalVisible(false)} />
      <div className="modal">
        <DialogContentContainer
          className="modalContent"
          size={DialogContentContainer.sizes.LARGE}
        >
          <Heading
            value={`Add your new ${addType}`}
            className="modalTitle"
            type={Heading.types.h3}
          />
          <div className="inputs">
            <TextField
              placeholder="Enter Description"
              size={TextField.sizes.MEDIUM}
              iconName={Description}
              onChange={(value) =>
                setSubmition({ ...submition, description: value })
              }
              loading={loadingSubmit}
            />
            <TextField
              placeholder="0.00"
              type="number"
              size={TextField.sizes.MEDIUM}
              iconName={AttachMoneyIcon}
              loading={loadingSubmit}
              onChange={(value) =>
                setSubmition({ ...submition, amount: value })
              }
            />
          </div>

          {fixed ? (
            <div className="fixedDates">
              From
              <TextField
                size={TextField.sizes.SMALL}
                type={TextField.types.DATE}
                onChange={(value) =>
                  setSubmition({ ...submition, startDate: value })
                }
              />
              To
              <TextField
                size={TextField.sizes.SMALL}
                type={TextField.types.DATE}
                onChange={(value) =>
                  setSubmition({ ...submition, endDate: value })
                }
              />
            </div>
          ) : (
            <></>
          )}

          <Heading
            value="Pick the Category:"
            className="modalTitle"
            type={Heading.types.h4}
          />
          <div className="typeSelection">
            {radioButtons.map((radioBtn) => (
              <RadioButtonWrapper
                icon={radioBtn.icon}
                name={radioBtn.name}
                onClick={() =>
                  setSubmition({ ...submition, category: radioBtn.name })
                }
              />
            ))}
          </div>

          <div className="modalButtons">
            <Button className="modalActionBtn" onClick={() => handleSubmit()}>
              Submit
            </Button>
            <Button
              className="modalActionBtn"
              onClick={() => setModalVisible(false)}
              kind={Button.kinds.TERTIARY}
            >
              Cancel
            </Button>
          </div>
        </DialogContentContainer>
      </div>
    </>
  ) : (
    <></>
  );
}

export default NewAddition;
