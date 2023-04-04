import classnames from "classnames/bind";
import styles from "./swatches.module.scss";

const cx = classnames.bind(styles);

const Swatches = ({ colors }) => {
    return <ul className={styles.swatches}>
        {colors.map((color) => {
                const { hex } = color;
                let swatchClasses = cx({
                    swatch: true,
                    active: color.slug === activeColor.slug
                });
                return <li
                className={styles.swatch}
                onClick={() => {
                clickHandler(color);
                }}
                style={{
                    backgroundColor: hex
                }}
                ></li>
        })}
    </ul>
}
export default Swatches;