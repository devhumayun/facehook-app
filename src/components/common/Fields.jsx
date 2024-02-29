import React from 'react'

const Fields = ({ label, children, error, htmlFor }) => {

    const id = htmlFor || getChildrenId(children)

    return (
        <div className="form-control">
            {label && <label className="auth-label" htmlFor={id}> {label} </label>}
            {children}
            {!!error && <div className='text-red-400'>{error.message}</div>}
        </div>
    )
}

const getChildrenId = (children) => {
    const child = React.Children.only(children)

    if ("id" in child.props) {
        return child?.props?.id;
    }
}
export default Fields
