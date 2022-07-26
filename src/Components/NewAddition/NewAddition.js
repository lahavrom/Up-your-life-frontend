import "./NewAddition.css";
import {
  DialogContentContainer,
  Button,
  TextField,
  RadioButton,
} from "monday-ui-react-core";
import { Description } from "monday-ui-react-core/dist/allIcons";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function NewAddition({ type, modalVisible, setModalVisible }) {
  return modalVisible ? (
    <>
      <div className="darkBG" onClick={() => setModalVisible(false)} />
      <div className="modal">
        <DialogContentContainer
          className="modalContent"
          size={DialogContentContainer.sizes.LARGE}
        >
          <div className="inputs">
            <TextField
              placeholder="Enter Description"
              size={TextField.sizes.MEDIUM}
              iconName={Description}
              required={true}
            />
            <TextField
              placeholder="0.00"
              size={TextField.sizes.MEDIUM}
              iconName={AttachMoneyIcon}
              required={true}
            />
          </div>

          <div className="typeSelection">
            <RadioButton>Selection</RadioButton>
          </div>

          <div className="modalButtons">
            <Button className="modalActionBtn" onClick={""}>
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
