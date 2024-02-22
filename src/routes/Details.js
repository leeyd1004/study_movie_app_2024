import React, {useEffect, useState} from "react";

// function Details(props){
//     console.log(props);
//     return <span>hello</span>;
// }

const Details = (props) => {
    console.log(props);
    useEffect(()=>{
        const {location, history} = props;
        if(location.state == undefined){
            history.push('/')
        }
    });
    
    const {location} = props;
    if(location.state){
        return <span>{location.state.title}</span>;
    }
    else{
        return null;
    }
    
    // return <span>hello</span>;
}

export default Details;