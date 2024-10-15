import Image from "next/image";
import batmanLogo from "/batman_logo.png";
import { logo } from "./banner.module.css";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image 
                    src={batmanLogo} 
                    alt="logo" 
                    className={logo}
                />
            </div>0
            <div className="col-7 mt-5" style={subtitleStyle}>
                Providing bat caves all over the world
            </div>
        </header>
    );
};

export default Banner;