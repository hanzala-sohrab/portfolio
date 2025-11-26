import useWindowStore from "#store/window.js";
import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {Copy} from "lucide-react";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile?.data;
    if (!data) return null;
    const {name = '', image = '', subtitle = '', description = []} = data;

    return <>
        <div id="window-header">
            <WindowControls target="txtfile" />
            <h2>{name}</h2>
            <Copy className="icon" />
        </div>

        <div className="p-5 space-y-6 bg-white">
            {image.length > 0 &&
                <div className="w-full">
                    <img className="w-full h-auto rounded" src={image} alt={name} />
                </div>
            }

            {subtitle.length > 0 && <h3 className="text-lg font-semibold">{subtitle}</h3>}

            {Array.isArray(description) && description.length > 0 && <div className="space-y-3 leading-relaxed text-base text-gray-800">
                {description.map((item, index) => (<p key={index}>{item}</p>))}
            </div>}
        </div>
    </>
}

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
