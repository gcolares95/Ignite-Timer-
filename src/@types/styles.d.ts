// Arquivo 'd.ts' de definição de tipos
// contém somente Tipagem

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Sobrescrevendo tipagem para o módulo styled components
// Com as opções de tema
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
