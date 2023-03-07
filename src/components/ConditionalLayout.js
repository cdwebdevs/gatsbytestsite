import React from "react"
import Layoutagain from "./layout"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>
            Close
          </Link>
          {children}
        </React.Fragment>
      ) : (
        <Layoutagain{ ...rest }>
          {children}
        </Layoutagain>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout