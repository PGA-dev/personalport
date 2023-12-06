

const references = [
    {
        "name": "PGA",
        "link": "https://github.com/PGA-dev",
        "linkText": "PGA GitHub",
        "message": "References to my recent projects from NuCamp"
    },
    {
        "name": "PGA2",
        "link": "https://github.com/PGA-dev",
        "linkText": "PGA GitHub2",
        "message": "References to my recent projects from NuCamp2"
    },
    {
        "name": "PGA3",
        "link": "https://github.com/PGA-dev",
        "linkText": "PGA GitHub3",
        "message": "References to my recent projects from NuCamp3"
    }
]

const SiteRefListStatic = () => {

    const { name, link, linkText, message } = references;
    

    return (
        <>
        {references.map((references) => {
            return (
                <>
                <p>
                    {name}
                </p>
                <p>
                    {message}
                </p>
                Source Link<a href={link}  target="_blank" rel="noreferrer">{linkText}</a>
            </>
            )
        })}
        </>
    )
};

export default SiteRefListStatic;