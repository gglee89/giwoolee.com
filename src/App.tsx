import './App.css'
import './Theme.css'

import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import { ThemeProvider } from '@/components/theme-provider'

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
