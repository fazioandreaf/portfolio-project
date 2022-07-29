import React, { Fragment } from "react";
import { ChildAsFC } from "./Child";


const Parent = () => {
    return  <Fragment>
        <ChildAsFC color="red" onClick={()=> console.log('clicked')}>
            olaaa
        </ChildAsFC>
    </Fragment>

}

export default Parent;