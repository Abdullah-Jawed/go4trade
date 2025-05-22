import { Routes, Route } from 'react-router-dom'
// import './styles/index.css'
import Layout from './Layouts/Layout'
import { Challenges, GeneralRules, Home, PricavyPolicy, ScalingPlan, TermsCondition } from './pages';
import { About } from './pages';
import SmoothLayout from './components/ScrollSmoother';
import ScrollTriggerRefresher from './components/ScrollTriggerRefresher';
function App() {
  return (
    <SmoothLayout >
      <Layout>
        <ScrollTriggerRefresher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/general-rules" element={<GeneralRules />} />
          <Route path="/scaling-plan" element={<ScalingPlan />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/privacy-policy" element={<PricavyPolicy />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
        </Routes>
      </Layout>
    </SmoothLayout>
  )
}

export default App
