import React, { createContext} from 'react';
import { ThemeProvider, createTheme} from '@material-ui/core'

export const TemplateContext = createContext(null)

const TemplateProvider = ({children}) => {

    const theme = createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    height:'96%',
                    top:17,
                    width:'21.2%',
                    left:62,
                    boxShadow:'none'
                   
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }
    })
    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
