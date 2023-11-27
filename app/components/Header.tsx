import React from 'react'

/* holds logo and login / logout button  */
const Header = () => {
  return (
    <>
      <section className="row space-between header">
        <div>
          <img src="subtask-logo.jpg" alt="subtask logo" height={'100px'} />
        </div>
        <div>
          <button>login / logout</button>
        </div>
      </section>
    </>
  )
}

export default Header
