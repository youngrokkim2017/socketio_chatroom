import React from 'react';

const IndexPage = (props) => {
    React.useEffect(() => {
        const token = localStorage.getItem("CC_Token");
        console.log(token);

        if (!taken) {
            props.history.push('/login');
        } else {
            props.history.push('/dashboard');
        }
    }, [0])

    return <div></div>
}

export default IndexPage;