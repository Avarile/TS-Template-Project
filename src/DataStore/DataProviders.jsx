import React from "react"
import { GlobalDataProvider } from "./GlobalStates/GlobeStore"

//  AppProviders is the Root ContextProvider.  As the App scale varialbe Provider
export const DataProviders = ({ children }) => {
  return (
    <>
      <GlobalDataProvider>{children}</GlobalDataProvider>
    </>
  )
}
