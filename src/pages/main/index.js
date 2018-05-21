import React from 'react';
import Iframe from 'react-iframe'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Iframe url="https://m.jd.com/"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
        );
    }
}

export default Home;