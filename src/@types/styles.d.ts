import "styled-components";
import { defaultTheme } from "../styles/themes/default";

/** we are rewriting styles components library with DefaultTheme and puting it as new type from defaultTheme */
type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
