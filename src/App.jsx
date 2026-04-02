
import './App.css'
import UseContext from './hooks/use-context/UseContext'
import UseEffect from './hooks/use-effect/UseEffect'
import UseIdHook from './hooks/use-id/UseIdHook'
import UseImperative from './hooks/use-imperative/UseImperative'
import UseLayoutEffect from './hooks/use-layout-effect/UseLayoutEffect'
import UseReducer from './hooks/use-reducer/UseReducer'
import UseReference from './hooks/use-reference/UseReference'
import UseState from './hooks/use-state/UseState'
import UseSyncStore from './hooks/use-sync-store/UseSyncStore'
import UseTransition from './hooks/use-transition/UseTransition'

function App() {

  return (
    <>
    <div className="continer">
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* <UseContext /> */}
      {/* <UseReducer/> */}
      {/* <UseReference/> */}
      {/* <UseImperative/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseIdHook/> */}
      {/* <UseTransition /> */}
      <UseSyncStore/>
    </div>
    </>
  )
}

export default App
