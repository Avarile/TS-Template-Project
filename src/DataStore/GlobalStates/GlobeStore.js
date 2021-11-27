import { createStore, createInject } from "natur"
import React from "react"
import { globalStates } from "./GlobalStates"

const globalStore = createStore(
  {
    globalStates,
  },
  {}
)

const GlobalStatesContext = React.createContext(undefined)

export const GlobalDataProvider = ({ children }) => {
  const globalStoreInject = createInject({ storeGetter: () => globalStore })
  return (
    <GlobalStatesContext.Provider
      children={children}
      value={{
        globalStoreInject,
      }}
    />
  )
}
export const useGlobalStates = () => {
  const context = React.useContext(GlobalStatesContext)
  // if the context is not available throw error
  if (!context) {
    throw new Error("useGlobalStates can only be implemented within GlobalStatesContext.Provider")
  }
  return context
}
