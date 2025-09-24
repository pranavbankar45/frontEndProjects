import React from 'react'
import ReactDOM from 'react-dom/client'

// Using React.createElement
const reactEl = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  // thirduser
)
// third variable add to dom
const thirduser =" pranav good afternoon"

// Using JSX
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit To Google
  </a>,
thirduser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {reactEl}
    <br />
    {anotherElement}
  </>
)
