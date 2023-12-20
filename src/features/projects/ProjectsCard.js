

const ProjectsCard = ({projects}) => {

    const { id, } = projects

    return (
       

        <table id={id}>
            <caption>
               
            </caption>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
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



