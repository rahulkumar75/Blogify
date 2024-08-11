import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // asking from store ki user login hai ya nhi

  useEffect(() => {
    //TODO: make it more easy to understand 

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    // ----- 
    //let authValue = authStatus === true ? true : false

    if (authentication && authStatus !== authentication) {
      // (true && false !== true) -> (true && true) => true
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // (!true && true !== true) -> (false && false) => true
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

// its a kind of container 
// ye ek container hai ye deceide karega ki value(children) ko show(render) karna hai ki nahi