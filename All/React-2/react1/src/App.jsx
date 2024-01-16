import * as React from "react";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import shoes from "./assets/shoes.jpg";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Puma from './assets/puma.svg';

export  function ButtonUsage() {
  return (
    <>
      <div className="body  bg-[#C88EFE] h-screen grid place-content-center">
        <h1 className="text-7xl font-semibold text-center text-white">
          Item Card using HTML & CSS
        </h1>
        <div className="flex justify-center ">
          <div className="card bg-white h-auto w-80 m-4 p-3 rounded-xl shadow-xl">
            <div className="icon flex justify-between">
              <img className="w-9 h-9" src={Puma} alt="" />
              
              <LocalGroceryStoreIcon />
            </div>
            <div className="flex justify-center m-2">
              <img className="h-64 " src={shoes} alt="" />
            </div>
            <div>
            <h1 className='text-2xl font-bold'>XRay Jr Dark</h1>
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eum eius non dolore tempore facilis quaerat laudantium asperiores.</p>
              <StarRating />
            </div>
            <div className='mt-2'>
              <span className='font-bold text-3xl flex justify-center'><sup className='text-green-700 top-1'>$</sup>5.00/-</span>
            </div>
            <div className='bg-[#C88EFE] text-center rounded-full mt-3'>
              <Button className=' text-white'>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function StarRating() {
  const [value, setValue] = React.useState(2);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Stack spacing={1}>
        <Rating style={{color:"#C88EFE"}} className='my-2' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
      </Stack>
    </Box>
  )
}