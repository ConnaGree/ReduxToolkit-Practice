import { Provider } from 'react-redux'
import TodoContainer from './components/TodoContainer'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <main>
        <TodoContainer />
      </main>
    </Provider>
  )
}

export default App
