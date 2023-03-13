import React from "react"
import { CommonContext } from "./context"
import Pages from "./Pages"


function App() {

  return (
    <CommonContext.Provider value={{}}>
      <Pages />
    </CommonContext.Provider>
  )
}

export default App
