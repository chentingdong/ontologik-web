import React, { useEffect } from "react"
import Routes from "routes/Routes"
import { hot } from "react-hot-loader/root"
import "../../dist/tailwind/tailwind.generated.css"
import { ThemeProvider } from '@chakra-ui/core'

const App = () => {
    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    )
}

export { App }
export default hot(App)
