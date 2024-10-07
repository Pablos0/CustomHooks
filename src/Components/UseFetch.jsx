import { useEffect, useState } from "react";
// import { useState } from "react";
// import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] =useState();
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => setData(data)) // res means "response"
    }, [])
return [data]
}

export default UseFetch
