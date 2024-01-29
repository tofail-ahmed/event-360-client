import React, { ReactNode } from 'react'
type TContainerprops={
  children:ReactNode;
  className?:string;
}
const Container = ({children,className}:TContainerprops) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container