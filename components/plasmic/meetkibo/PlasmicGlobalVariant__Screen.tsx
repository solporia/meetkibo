// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "tablet" | "mobileSmall";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  tablet: "(min-width:0px) and (max-width:768px)",
  mobileSmall: "(max-width:430px)",
});

export default ScreenContext;
/* prettier-ignore-end */
