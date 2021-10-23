import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function ListMenuPhone({ arrMenu }) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {arrMenu.map((item) => {
        return (
          <React.Fragment key={item.key}>
            <ListItem button>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
}
