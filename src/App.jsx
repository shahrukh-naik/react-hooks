
import './App.css'
import UseContext from './hooks/use-context/UseContext'
import UseEffect from './hooks/use-effect/UseEffect'
import UseReducer from './hooks/use-reducer/UseReducer'
import UseReference from './hooks/use-reference/UseReference'
import UseState from './hooks/use-state/UseState'

function App() {

  return (
    <>
    <div className="continer">
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* <UseContext /> */}
      {/* <UseReducer/> */}
      <UseReference/>
    </div>
    </>
  )
}

export default App
