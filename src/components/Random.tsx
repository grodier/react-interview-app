import * as React from "react";

function zeroOrOne() {
  return Math.floor(Math.random() * 2);
}

interface RandomProps {
  children: React.ReactNode | ((trueOrFalse: boolean) => React.ReactNode);
}

export function Random({ children }: RandomProps) {
  const renderChildren = () =>
    typeof children === "function" ? children(!!zeroOrOne()) : children;

  return <>{renderChildren()}</>;
}
