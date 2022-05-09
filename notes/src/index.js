
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id:1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.0982',
    import: true
  },
  {
    id:2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.0912',
    import: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.2982',
    import: true
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)