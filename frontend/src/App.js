import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextManager } from "./context"
import { MainLayout } from "./layouts"
import { Home, Profile } from "./pages"


export default function App(){
  return (
    <BrowserRouter>
      <ContextManager>
        <Routes>

          <Route path="/"element={<MainLayout />}>
              <Route index element={<Home />}/>

              <Route path="profile" element={<Profile />}/>
          </Route>

        </Routes>
      </ContextManager>
    </BrowserRouter>
  )
}
