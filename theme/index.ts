import { Theme, createTheme } from '@mui/material/styles'

// 配色工具：https://zenoo.github.io/mui-theme-creator/
// https://mycolor.space/?hex=%23845EC2&sub=1
// https://flatuicolors.com/
// https://collectui.com/challenges/404-page

/**
 * 全局组件主题
 */
export const defaultTheme: Theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(22, 22, 22)',
            contrastText: '#fff',
        },
        secondary: {
            main: '#D65DB1',
        },
        divider: '#FFC75F',
        error: {
            main: '#FF6F91',
        },
        warning: {
            main: '#FF9671',
        },
        info: {
            main: '#FFC75F',
        },
        success: {
            main: '#F9F871',
        },
    },
})

// export interface PaletteOptions {
//     primary?: PaletteColorOptions;
//     secondary?: PaletteColorOptions;
//     error?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//     info?: PaletteColorOptions;
//     success?: PaletteColorOptions;
//     mode?: PaletteMode;
//     tonalOffset?: PaletteTonalOffset;
//     contrastThreshold?: number;
//     common?: Partial<CommonColors>;
//     grey?: ColorPartial;
//     text?: Partial<TypeText>;
//     divider?: string;
//     action?: Partial<TypeAction>;
//     background?: Partial<TypeBackground>;
//     getContrastText?: (background: string) => string;
//   }

export default defaultTheme
