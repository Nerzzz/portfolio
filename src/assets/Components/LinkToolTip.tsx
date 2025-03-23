import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    path: string;
    icon: string;
    title: string;
    subtitle:string;
}

function LinkToolTip(props: Props) {
    const [showTooltip, setShowTooltip] = useState(false);
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleMouseEnter = () => {
        timeoutId = setTimeout(() => setShowTooltip(true), 500);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutId);
        setShowTooltip(false);
    };

    return (
        <div className="relative flex">
            <Link to={props.path} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-[10px] w-max md:text-quote text-white">
                <span className={`${props.icon} hover:text-white duration-[250ms]`}></span><span className="md:hidden block">{props.title}</span>
            </Link>
    
            {showTooltip && (
                <div className="absolute left-full ml-2 w-max max-w-[150px] p-[10px] bg-gray-800 text-white shadow-lg rounded duration-[250ms] animate-fade md:block hidden">
                    <h1 className="mb-[5pt] text-[10pt] font-black">{props.title}</h1>
                    <p className="text-[8pt] border-l-white border-l-1 pl-[5pt]">{props.subtitle}</p>
                </div>
            )}
        </div>
    );
}

export default LinkToolTip