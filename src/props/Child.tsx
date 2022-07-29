import React from 'react'

interface ChildProps {
    color: string,
    onClick: () => void,
    children?: string
}

export const Child = ({color, onClick}: ChildProps) => {
    return <>
    <div>
        {color}
        <button onClick={onClick}> Click me</button>
    </div>
    </>
}


// FC = Functional component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children})  => {
    return <div>
            {color}
            <button onClick={onClick}> Click me</button>
            {children}
        </div>
}