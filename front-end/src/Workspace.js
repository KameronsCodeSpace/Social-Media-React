import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

const Workspace = (props) => {
    if (props.isAuthenticated === false) {
        return <Redirect to='/' />
    }

    const images = [
        "https://media.giphy.com/media/8Z2ZvqEBOfJBSB6p9e/giphy.gif",
        "https://media.giphy.com/media/lktRm003jUWdL77s0X/giphy.gif",
        "https://media.giphy.com/media/Rx6RPupQfw0q4/giphy.gif",
        "https://media.giphy.com/media/ZZN5iWIaOXPEDkHLs7/giphy.gif",
        "https://media.giphy.com/media/5oZcD6HN4Yp6E/giphy.gif",
        "https://media.giphy.com/media/l2JeiPsXGIQxC3V84/giphy.gif",
        "https://media.giphy.com/media/hqZx1N5QpPyT0pqjMu/giphy.gif",
        "https://media.giphy.com/media/lQCV6K36nJfJYNxXbC/giphy.gif"
    ]

    let i = 0;

    function placeImage(x, y) {
        const nextImage = images[i]
        const img = document.createElement("img")
        img.setAttribute("src", nextImage)
        img.className = 'workspace-pic'
        img.style.left = x + "px"
        img.style.top = y + "px"
        img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

        document.body.appendChild(img)

        i = i + 1;

        if (i >= images.length) {
            i = 0
        }

    }

    document.addEventListener("click", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
    })

    return (
        <div>
            <h1>Workspace Page</h1>
            <p>{`This is the User: ${props.currentUser.email}`}</p>
            <p>{`Authentication: ${props.isAuthenticated}`}</p>


        </div>
    );
}

export default Workspace;