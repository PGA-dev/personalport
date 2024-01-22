// import resume from '../app/resume.docx';
// import styles from "./Res.module.css"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
//uri: require("../app/resources/FullStackDev.docx") -- current version of docx renderers don't work well with localhost uri
//
const Res = () => {

    const resdocs = [
        {uri: "https://github.com/PGA-dev/document/raw/main/word/FullStack.docx",
        fileType: "docx",
        fileName: "FullStackDev.docx"
        },
    ]

    return (
        <>
        <DocViewer documents={resdocs} 
        pluginRenderers={DocViewerRenderers}
        style={{height:1000, width:1550, margin:50}}
        />
        </>
        
    )
};

export default Res;