import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const id = setInterval(() => setTime(dayjs()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Hanzala&apos;s portfolio</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => <li key={id} onClick={() => openWindow(type)} className="cursor-pointer">{name}</li>)}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => <li key={id}><img src={img} alt={`icon-${id}`} className='icon-hover' /></li>)}
                </ul>

                <time>{time.format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}
export default Navbar
