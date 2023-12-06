import { useSelector } from "react-redux";
import { selectAllReferences } from "./siteReferenceSlice";
import SiteRefCard from './SiteRefCard';

const SiteRefList = () => {
    const references = useSelector(selectAllReferences);
    console.log('references: ', references);


    return (
        <>
            {references.map((references) => {
                return (
                    <div key={references.id}>
                        <SiteRefCard references={references} />
                    </div>

                )
            })}
        </>
    )
};

export default SiteRefList;