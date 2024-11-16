import React, { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export const Chat = () => {

  const [openEmoji, setOpenEmoji] = useState(false)
  const [textBar, setTextBar] = useState('')

  const handleEmojiClick = (e) => {
    setTextBar((prev)=>prev + e.emoji)
    // setOpenEmoji(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolfugiat sit?</p>
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon className='img' icon={faPhone} />
          <FontAwesomeIcon className='img' icon={faVideo} />
          <FontAwesomeIcon className='img' icon={faCircleInfo} />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetutium ut error laborum unde!</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <FontAwesomeIcon className='img' icon={faPaperclip} />
          <FontAwesomeIcon className='img' icon={faCamera} />
          <FontAwesomeIcon className='img' icon={faMicrophone} />
        </div>
        <input type="text" placeholder='Type a Message....' value={textBar} onChange={e=>setTextBar(e.target.value)} />
        <div className="emoji">
          <FontAwesomeIcon className='img' icon={faFaceSmile} onClick={() => setOpenEmoji(prev=>!prev)} />
          <div className="emojiPicker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}
