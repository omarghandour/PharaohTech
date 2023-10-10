import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Content from "./Components/Content";
import First from "./Components/First";
import OurServices from "./Components/OurServices";


export default function Home() {
  return (
  <div className='main'>
<First />
<About />
<OurServices />
<Content />
<Contacts />
  </div>
  )
}
