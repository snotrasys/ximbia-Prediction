import React from "react";
import { SpinnerProps } from "./types";
import { Box } from "../Box";
import { Image } from "../Image";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.097} position="relative">
      <img
        className="w-full h-auto"
        src="https://minio-s3.caprover.snotrasys.com/ximbia/logo.png"
        alt="pancake-3d-spinner"
      />
    </Box>
  );
};

export default Spinner;
