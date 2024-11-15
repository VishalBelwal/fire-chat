import { Chat } from './components/chat/Chat'
import { SideBar } from './components/sidebar/SideBar'
import { UserDetails } from './components/userDetails/UserDetails'
import './index.css'

const App = () => {
  return (
    <div className='container1'>
      <SideBar />
      <Chat />
      <UserDetails />
    </div>
  )
}

export default App