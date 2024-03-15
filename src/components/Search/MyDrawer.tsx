import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function MyDrawer() {
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
          <div className="favoriteExample flex justify-between border-black border-t-2 px-2">
            <div className="fpokemon">Pikachu</div>
            <div className="fpokemonId">#25</div>
            {/* <strong className="exit text-red-600">X</strong> */}
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer} placeholder={undefined}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="red"
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
        </div>

      </Drawer>
    </React.Fragment>
  );
}

export default MyDrawer