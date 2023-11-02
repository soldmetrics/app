import 'styled-components/native';

import { ThemeType } from '.';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
