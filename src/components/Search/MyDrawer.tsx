import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { getlocalStorage } from "../../DataServices/LocalSotrage";
import FavoriteComponent from "./FavoriteComponent";
import { FavoriteComponentProps } from "../../interfaces/IFavoriteComponent";


interface MyDrawerProps {
  favoriteComponentProps:FavoriteComponentProps
}


export function MyDrawer(props:MyDrawerProps) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <button className="redBtn" onClick={openDrawer} >Favorites</button>
      <Drawer open={open} onClose={closeDrawer} className="p-4" placeholder={undefined}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" placeholder={undefined}>
            Favorites
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer} placeholder={undefined}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div id="favoritesContainer" className="border-black border-b-2">
          <FavoriteComponent onClickDelete={props.favoriteComponentProps.onClickDelete}  onClickSearch={props.favoriteComponentProps.onClickSearch} />
        </div>

      </Drawer>
    </React.Fragment>
  );
}

export default MyDrawer