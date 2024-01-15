import { arrowRight } from "./assets/icons";
import Button from "./components/Button";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        hero section
      </section>
      <section>
        <Button label='Shop now' inconURl={arrowRight}/>

      </section>
    </main>
  )
}