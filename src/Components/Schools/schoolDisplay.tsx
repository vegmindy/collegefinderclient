const SchoolDisplay = (props: any) => {
    return (
        <div>
            {props.results.map((result: any) => {
                return (
                    <div>
                        <p>Schools will display here</p>
                    </div>
                    )
                })}
        </div>
                )
            };

export default SchoolDisplay;