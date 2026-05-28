import { Routes, Route } from 'react-router-dom'

// We will build these components next
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      {/* The Layout component wraps all nested routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        {/* Add more routes here later, like /about or /resume */}
      </Route>
    </Routes>
  )
}

export default App