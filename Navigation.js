import React from 'react'
import { Navbar,Nav,Container,NavLink } from 'react-bootstrap'

function Navigation() {
    return (
        <React.Fragment>
          <Navbar fixed="top" className="mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <NavLink href="https://www.consolebit.com/">
              ConsoleBit Technologies
              </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link>
                    <NavLink  href="https://www.consolebit.com/">
                    Home
                  </NavLink>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <NavLink href="https://www.consolebit.com/about-us/">
                    About Us
                  </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </React.Fragment>
    )
}

export default Navigation
