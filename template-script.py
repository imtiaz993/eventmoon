import os;
import sys;


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Component Name required")
        sys.exit();
    component_name = sys.argv[1]

    os.mkdir(component_name)

    scss_file = open(component_name + "/" + "styles.module.scss", "w");
    scss_file.close()

    jsx_file = open(component_name + "/" + component_name + ".jsx", "w")

    jsx_file_contents = """
    import classNames from "classnames/bind";

    //styles
    import styles from "./styles.module.scss";

    const cx = classNames.bind(styles);

    const {component_name} = () => {
        return (
            <div>{component_name}</div>
        )
    }

    export default {component_name};
    """

    jsx_file.write(jsx_file_contents.replace("{component_name}", component_name))
    jsx_file.close()

    index_file = open("index.js", "a")
    index_content = f"export \{default as {component_name} \} from \"{component_name}/{component_name}\""
    index_file.write(index_content)
    index_file.close()