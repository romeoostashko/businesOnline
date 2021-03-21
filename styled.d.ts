import "styled-components";

import { palette } from "theme/palette";

type IPalette = typeof palette;

declare module "styled-components" {
  export interface DefaultTheme {
    palette: IPalette;
  }
}
