import React from "react"
import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"
import { MemoryRouter } from "react-router-dom"

describe("Navbar Component", () => {
    const renderNavbar = () => {
        render(<Navbar/>,{wrapper: MemoryRouter})
    }

    test("render both link", () => {
        // render the navbar
        renderNavbar();
        // expect the links to be there or something
        expect(screen.getByText("Posts List")).toBeInTheDocument()
        expect(screen.getByText("Create New Post")).toBeInTheDocument()
    })
})