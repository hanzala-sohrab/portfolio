import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import {Dock, Navbar, Welcome} from '#components'
import {Terminal} from "#windows";
import {Safari} from "#windows";
const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
        </main>
    )
}
export default App
