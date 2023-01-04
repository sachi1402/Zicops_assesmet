import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
        <div className="nav_section">
        <div>Self</div>
        <div>Class room</div>
        <div>Event room</div>
        <div>Labs</div>
        <div>Exams</div>
        <div>Community</div>
        </div>
        <div className="nav_icons">

        </div>
        <div className='nav_user'>
            <img src=''/>
            <div className='nav_user-name'>
                <h4>Name Example</h4>
                <p>designation</p>
            </div>
        </div>

    </div>
  )
}

export default Nav