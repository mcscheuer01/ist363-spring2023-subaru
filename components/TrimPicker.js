import Heading from "./Heading";
import Image from "next/image";

const TrimPicker = ({ trimLevels }) => {
    return <div>
        <ul>
            {trimLevels.map((trimLevel, index) => {
                const { name, images } = trimLevel;
                const { thumbnail } = images;
                return <li key={index}>
                    <Heading level={3}>{name}</Heading>
                    <Image
                        src={thumbnail.sourceUrl}
                        alt={thumbnail.altText}
                        width={thumbnail.mediaDetails.width}
                        height={thumbnail.mediaDetails.height}
                    />
                    </li>
            })}
        </ul>

    </div>
}
export default TrimPicker;