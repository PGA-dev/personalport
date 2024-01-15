// import resume from '../app/resume.docx';
import styles from "./Res.module.css"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
//uri: require("../app/resources/FullStackDev.docx")
const Res = () => {

    const resdocs = [
        {uri: "https://github.com/PGA-dev/document/raw/main/word/FullStack.docx",
        fileType: "docx",
        fileName: "FullStackDev.docx"
        }
    ]

    return (
        <>
        <DocViewer className={styles.res} documents={resdocs} pluginRenderers={DocViewerRenderers}
        />
        </>
        
    )
};

export default Res;