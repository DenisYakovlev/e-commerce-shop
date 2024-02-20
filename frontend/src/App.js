import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextManager } from "./context"
import { MainLayout } from "./layouts"
import { Home } from "./pages"


export default function App(){
  return (
    <BrowserRouter>
      <ContextManager>
        <Routes>

          <Route path="/"element={<MainLayout />}>
              <Route index element={<Home />}/>
          </Route>

        </Routes>
      </ContextManager>
    </BrowserRouter>
  )
}
