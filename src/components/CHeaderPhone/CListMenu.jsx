import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router"

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

export default function ListMenuPhone({ setShowMenuListLeft, setShowMenuListRight, arrMenu }) {
  const router = useRouter()
  const handleClickMenu = (link) => {
    router.push(`${link}`);
    setShowMenuListLeft(false);
    setShowMenuListRight(false);
  }
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {arrMenu.map((item) => {
        return (
          <React.Fragment key={item.key}>
            <ListItem style={{ width: 250 }} button onClick={() => handleClickMenu(item.link)}>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
}
