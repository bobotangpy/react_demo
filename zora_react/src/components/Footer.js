import React from 'react';

const style = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    overflow: "hidden",
    zIndex: "999"
}

export const Footer = () => {
    return (
        <footer className="py-3 bg-light" style={style}>
            <div className="container">
                <p className="m-0 text-center">Copyright &copy; Zora 2020</p>
            </div>
        </footer>
    )
}