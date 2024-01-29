import React, { useEffect, useState } from "react";

function sourceVaue (initialvalue) {
    let value = localStorage.getItem("key") || sessionStorage.getItem("key")
    return value ? value : initialvalue
}

export default function TakeInput(key, initialvalue) {
  const [state, setState] = useState(() => {
    return sourceVaue(key, initialvalue)
  });

  useEffect(() => {
    localStorage.setItem(key, state);
    sessionStorage.setItem(key,state);
  }, [key, state]);

  return [state, setState];
}
