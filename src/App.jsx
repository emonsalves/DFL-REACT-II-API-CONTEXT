import { Suspense, lazy } from "react"
import Loading from "./components/loading/Loading"
const PageLayout = lazy(() => import("./layout/PageLayout.jsx"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <PageLayout />
      </div>
    </Suspense>
  )
}

export default App
