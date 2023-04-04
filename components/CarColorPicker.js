import { useState } from "react";
import Image from "next/image";
import Swatches from "./Swatches";

const CarColorPicker = ({ colors }) => {
    const [activeColor, setActiveColor] = useState(colors[0]);

    return <div>
        <h2>Color Picker</h2>
        <div>
            <Image
                src={`/vehicles/crosstrek/colors/crosstrek-${activeColor.slug}.webp`}
                alt={`Crosstrek ${activeColor.name}`}
                width={300}
                height={200}
            />
        </div>
        <Swatches 
        colors={colors}
        clickHandler={setActiveColor}
        />
        <h3>{activeColor.name}</h3>
    </div>
}
export default CarColorPicker;