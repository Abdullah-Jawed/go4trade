import { Routes, Route } from 'react-router-dom'
// import './styles/index.css'
import Layout from './Layouts/Layout'
import { Home } from './pages';
import { About } from './pages';
import SmoothLayout from './components/ScrollSmoother';
function App() {
  return (
    <SmoothLayout >
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
    </SmoothLayout>
  )
}

export default App
