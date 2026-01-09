import { lazy, Suspense } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);
import { Navbar } from '#components'
const Dock = lazy(() => import('#components').then(m => ({ default: m.Dock })));
const Welcome = lazy(() => import('#components').then(m => ({ default: m.Welcome })));
const Resume = lazy(() => import("#windows").then(m => ({ default: m.Resume })));
const Terminal = lazy(() => import("#windows").then(m => ({ default: m.Terminal })));
const Safari = lazy(() => import("#windows").then(m => ({ default: m.Safari })));
const Finder = lazy(() => import("#windows").then(m => ({ default: m.Finder })));
const Text = lazy(() => import("#windows").then(m => ({ default: m.Text })));
const Image = lazy(() => import("#windows").then(m => ({ default: m.Image })));
const Contact = lazy(() => import("#windows").then(m => ({ default: m.Contact })));

const App = () => {
    return (
        <main>
            <Navbar />
            <Suspense fallback={<div />}>
                <Welcome />
                <Dock />
                <Terminal />
                <Safari />
                <Resume />
                <Finder />
                <Text />
                <Image />
                <Contact />
            </Suspense>
        </main>
    )
}
export default App
