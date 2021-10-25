import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsAlert } from "../redux/controller/boostrap.slice";

const CSnackbar = () => {
  const { isAlert, titleAlert } = useSelector((state) => state.boostrap);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      setIsAlert({
        isAlert: false,
        titleAlert: titleAlert,
      })
    );
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isAlert}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert style={{ backgroundColor: "#339933", color: "white" }} onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {titleAlert}
      </Alert>
    </Snackbar>
  );
};
export default CSnackbar;
