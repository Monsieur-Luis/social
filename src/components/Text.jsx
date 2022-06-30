import React from 'react'

const Text = ({ as = "h1", children }) => {
    switch (as) {
        case "h2":
            return <h2 className={as}>{children}</h2>;
        case "h3":
            return <h3 className={as}>{children}</h3>;
        case "h4":
            return <h4 className={as}>{children}</h4>;
        case "h5":
            return <h5 className={as}>{children}</h5>;
        case "h6":
            return <h6 className={as}>{children}</h6>;
        case "p":
            return <p className={as}>{children}</p>;
        default:
            return <h1 className={as}>{children}</h1>;
    }
}

export default Text