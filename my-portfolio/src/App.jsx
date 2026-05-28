import { Routes, Route } from 'react-router-dom'

// We will build these components next
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Experience from './pages/Experience'

function App() {
  return (
    <Routes>
      {/* The Layout component wraps all nested routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  )
}

export default App