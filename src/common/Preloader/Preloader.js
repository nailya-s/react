import React from 'react';
import preloader from '../../images/images/preloader1.gif';

let Preloader = (props)=> {
    return <div>
        <img src={preloader} style={{width:"500px"}, {height:"500px"}}/>
        </div>
};

export default Preloader;