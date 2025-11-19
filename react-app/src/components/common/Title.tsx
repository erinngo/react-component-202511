import React from "react";

interface Props {
  title: string;
}

function Title(props: Props) {
  const { title } = props;

  return <h3>{title}</h3>;
}

export default Title;
