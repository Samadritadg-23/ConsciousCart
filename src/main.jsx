import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./context/AuthContext"
import { SavedProvider } from "./context/SavedContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SavedProvider>
      <App />
    </SavedProvider>
  </AuthProvider>
)