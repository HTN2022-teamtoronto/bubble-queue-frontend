import React from "react";
import {Box, Slider} from '@mui/material';
function HostSectionCard({ queueNum }) {
  return (
    <div className="items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 w-96 justify-between my-4 p-3">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 ">Name: Desk {queueNum}</h5>
        <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={5}
        getAriaValueText={(value) => `${value} people in the buffer`}
        step={1}
        marks
        min={1}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
</div>
  );
}

export default HostSectionCard;
