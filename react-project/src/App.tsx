import Header from './Header'
import "./App.css"
import MainComponent from './MainComponent'
import Motivation from './Motivation'
import TrainingTypes from './TrainingTypes'
import JoinUs from './JoinUs'
import Location from './Location'
import Family from './Family'
import Calculate from './Calculate'
import Footer from './Footer'

function App(){
  return <div>
    <Header/>
    <main className="content">
      <MainComponent/>
      <Motivation/>
      <TrainingTypes/>
      <JoinUs/>
      <Location/>
      <Family/>
      <Calculate/>
      <Footer/>
    </main>
    </div>
}

export default App