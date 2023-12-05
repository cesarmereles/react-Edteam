import Curso from './Curso'
import Header from './Header'

function App() {
  return (
    <>
      <Header/>
      <main>
        <h1>Primera App</h1>
        <Curso 
          imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/662ba6d8-9458-489e-bb3a-5ee98183ae6d.png"
          titulo = "Backend con Javascript"
          subtitulo ="Conviértete en programador fullstack aprendiendo JavaScript del lado del servidor"
        />
      </main>
    </>
  )
}

export default App
