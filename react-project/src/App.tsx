import Header from './Header'
import "./App.css"
import MainComponent from './MainComponent'
import Motivation from './Motivation'

function App(){
  return <div>
    <Header/>
    <main className="content">
      <MainComponent/>
      <Motivation/>
    </main>
    </div>
}

export default App