import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

React;

export function Portal(props: { children?: ReactNode }) {
  return createPortal(props.children, document.body)
}