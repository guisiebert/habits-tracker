

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={15} />
      <Habit completed={33} />
      <Habit completed={5} />
      <Habit completed={11} />
    </div>
  )
}

export default App

