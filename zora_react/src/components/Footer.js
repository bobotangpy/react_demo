import React from 'react';

const style = {
    position: "absolute",
    marginBottom: 0,
    width: "100%",
    overflow: "hidden"
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