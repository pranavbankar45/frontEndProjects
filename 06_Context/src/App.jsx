import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import { UserProvider } from './context/UserContext' 

function App() {
  return (
    <UserProvider>
      <h1>React With Chai and Share is Important</h1>
      <Login />  
      <Profile />
    </UserProvider>
  )
}

export default App
