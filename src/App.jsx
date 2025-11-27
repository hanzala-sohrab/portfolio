import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import {Dock, Navbar, Welcome} from '#components'
import {Resume, Terminal, Safari, Finder, Text, Image, Contact} from "#windows";
const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </main>
    )
}
export default App
