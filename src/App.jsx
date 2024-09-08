import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion'

function App() {

  return (
<main className='containter my-4'>
  <h1 class="text-center">Primer Proyecto </h1>
  <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Nesciunt eius harum magnam earum rerum, nobis, <br></br> explicabo maxime perspiciatis eaque dicta consequatur officiis debitis exercitationem nisi quidem iste praesentium deleniti soluta.
  </p>
  {/* invocar los componentes  */}
  <Informacion></Informacion>
  </main>
  )
}

export default App
