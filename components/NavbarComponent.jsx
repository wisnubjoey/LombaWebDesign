"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useState} from "react";
import Link from "next/link";

const Navigation = [
    { name: 'Tentang', href: '/Tentang'},
    { name: 'Hubungi', href: '/Hubungi'},
]

export function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">BjoeyR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            {Navigation.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <Nav.Link as={Link} href={item.href}>{item.name}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
