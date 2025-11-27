import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import {Dock, Navbar, Welcome} from '#components'
import {Resume, Terminal, Safari, Finder, Text, Image} from "#windows";
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
        </main>
    )
}
export default App
