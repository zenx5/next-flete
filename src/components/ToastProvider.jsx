"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useRef } from "react";

export function setToast(message, type = null) {
    if (type) document.querySelector("input[name='toast-type']").setAttribute("value", type)
    document.querySelector("input[name='toast-message']").setAttribute("value", message)
}

export function ToastProvider() {
  const refMessage = useRef();
  const refType = useRef();

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
            const message = mutation.target.value;
            const typeMessage = refType.current.value;
            if (message !== "" && refMessage.current.value !== "" ) {
                if (toast[typeMessage] instanceof Function) {
                    toast[typeMessage](message);
                } else {
                    toast(message);
                }
                refMessage.current.setAttribute("value", "")
                refType.current.setAttribute("value", "")
            }
        }
      }
    });
    if (refMessage.current)
      observer.observe(refMessage.current, {
        attributes: true,
        childList: false,
        subtree: false,
      });

      return () => observer.disconnect()
  }, []);

  return (
    <>
      <input ref={refMessage} type="text" name="toast-message" />
      <input ref={refType} type="text" name="toast-type" />
      <ToastContainer />
    </>
  );
}