import { Routes, Route } from 'react-router-dom'
// import './styles/index.css'
import Layout from './Layouts/Layout'
import { Challenges, GeneralRules, Home, ScalingPlan } from './pages';
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
        <Route path="/scaling-plan" element={<ScalingPlan />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Layout>
    </SmoothLayout>
  )
}

export default App
