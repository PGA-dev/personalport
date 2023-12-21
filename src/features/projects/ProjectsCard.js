import ProjectTableData from "./projectTdCard";

const ProjectsCard = ({projects}) => {

    const { id, th1, th2, th3, th4, th5, th6, th7 } = projects;

    return (
       

        <table id={id}>
            <caption>
               
            </caption>
            <tr>
                <th>{th1}</th>
                <th>{th2}</th>
                <th>{th3}</th>
                <th>{th4}</th>
                <th>{th5}</th>
                <th>{th6}</th>
                <th>{th7}</th>
            </tr>
            <tr>
                <td data-cell="date"></td>
                <td data-cell="name"></td>
                <td data-cell="company"></td>
                <td data-cell="technology"></td>
                <td data-cell="repo">
                    <a className={styles.a} href='https://github.com/PGA-dev/personalport' target="_blank" rel="noreferrer"><i>GH: portfolio</i></a>
                </td>
                <td data-cell="notes"></td>
                <td data-cell="url"></td>
            </tr>




        </table>

    )
}



