import { green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: green.A400
        },
        secundary: {
            main: green.A400
        },
        error: {
            main: red.A400
        }
    }
})