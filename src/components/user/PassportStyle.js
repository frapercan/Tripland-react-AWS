import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({

  rootPassport: {
    display: "flex",
    flexGrow: "inherit",
    flex: "auto",
    paddingRight: 0,
    paddingLeft: 0,
    border: "15px solid var(--secondary-color)"
    
  },
  passport: {
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "var(--secondary-color)",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "var(--main-font)",
    fontWeight: "bold",
    fontSize: "18px",
    display: "flex",
    flex: "auto",
    justifyContent: "center",
    marginBottom: 32,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    textAlign: "center",
  },
  inputContainer: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  label: {},
  attribute: {
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 1,
    border: "none",
    minWidth: "50%",
    height: "50px",
    textAlign: "center",
    paddingTop: "13px",
    color: "white",
  },
  passportContainer: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "theme.palette.text.secondary",
    backgroundColor: "white",
  },

  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  uploadButton: {},

  profileInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 1,
    border: "none",
    width: "50%",
    height: "50px",
    textAlign: "center",
  },
  avatar: {
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "auto",
  },
  description: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 1,
    border: "none",
    width: "80%",
    height: "200px",
    textAlign: "center",
  },
  descriptionView: {
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 1,
    Height: "300px",
    Width: "100%",
    textAlign: "center",
    paddingTop: "13px",
    paddingBottom: "13px",
  },
  passportOverviewContainer: {
    backgroundColor: "#6b3350",
    padding: theme.spacing(1),
  },
  errors: {
    color: "red",
    backgroundColor: "yellow",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
