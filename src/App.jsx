import { Routes, Route } from 'react-router-dom'
// import './styles/index.css'
import Layout from './Layouts/Layout'
import { GeneralRules, Home } from './pages';
import { About } from './pages';
import SmoothLayout from './components/ScrollSmoother';
function App() {
  return (
    <SmoothLayout >
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/general-rules" element={<GeneralRules />} />
      </Routes>
    </Layout>
    </SmoothLayout>
  )
}

export default App
