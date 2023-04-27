import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

// components
import Heading from "./Heading";
import Image from "next/image";

const TrimPicker = ({ trimLevels }) => {
    // stateVariable, setterFunctionVariable
    const [activeTrimLevelIndex, setActiveTrimLevelIndex] = useState();

    return <div>

        <Image
            src={trimLevels[activeIndex].images.large.sourceUrl}
            alt={trimLevels[activeIndex].images.large.altText}
            width={trimLevels[activeIndex].images.large.mediaDetails.width}
            height={trimLevels[activeIndex].images.large.mediaDetails.height}
        />
        <Heading level={2}>{trimLevels[activeIndex].name}</Heading>


        <ul>
            {trimLevels.map((trimLevel, index) => {
                const { name, images } = trimLevel;
                const { thumbnail } = images;
                return <li onClick={() => {
                    setActiveIndex(index);
                }}>
                    <Heading level={3}>{name}</Heading>
                   {thumbnail &&
                    <Image
                        src={thumbnail.sourceUrl}
                        alt={thumbnail.altText}
                        width={thumbnail.mediaDetails.width}
                        height={thumbnail.mediaDetails.height}
                    />
                   }
                    </li>
            })}
        </ul>

    </div>
}
export default TrimPicker;