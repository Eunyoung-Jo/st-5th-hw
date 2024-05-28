import React, { useContext } from "react";
import { TextsContext } from "../TextsContext";

export default function TextList() {
  const { texts } = useContext(TextsContext);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
