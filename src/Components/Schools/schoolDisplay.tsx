// const SchoolDisplay = (props: any) => {
//     console.log(props)
//     return (
//         <div>
//             {props.results.map((results: any) => {
//                 return (
//                     <div key={results.id}>
//                             <p>
//                                 {results}
//                                 <br />
//                             </p>
//                             <p>
//                             </p>
//                     </div>
//                     )
//                 })}
//         </div>
//                 )
//             };

// export default SchoolDisplay;


// const SchoolDisplay = (props: any) => {
//     return (
//         <div>
//             {props.results.map((result: any) => {
//                 return (
//                     <div>
//                         <p>Schools will display here</p>
//                     </div>
//                     )
//                 })}
//         </div>
//                 )
//             };

// export default SchoolDisplay;

// const SchoolDisplay = (props: any) => {
//     return (
//         <div>
//             {props.results.map((result: any) => {
//                 return (
//                     <div key={result._id}>
//                         {/* <h2><a href={result.web_url}>{result.headline.main}</a> </h2> */}
//                     {/* {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''} */}
//                             <p>
//                                 {result.snippet}
//                                 <br />
//                                 {result.keywords.length > 0 ? 'Associated Keywords: ' : ''}
//                             </p>
//                             <p>
//                                 {result.keywords.map((keyword: any) => <li key={keyword.value} > {keyword.value} </li>)}
//                             </p>
//                     </div>
//                     )
//                 })}
//         </div>
//                 )
//             };

// export default SchoolDisplay;

// const useStyles = makeStyles(() =>
//     createStyles({
//         container: {
//             marginTop: '4em',
//             display: 'flex',
//             justifyContent: 'center',
//             alignContent: 'center',
//             height: '100%'
//         }
//     }),
// );



const SchoolDisplay = (props: any) => {
    console.log(props)
    return (
        <div>
            {props.results.map((results: any) => {
                return (
                    <div key={results.id}>
                            <p>
                                {results}
                                <br />
                            </p>
                            <p>
                            </p>
                    </div>
                    )
                })}
        </div>
                )
            };

export default SchoolDisplay;