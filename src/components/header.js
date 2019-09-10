// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { loadCSS } from "fg-loadcss"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import { Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 0,
    paddingRight: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: "#FFFFFF",
  },
}))

function Header({ siteTitle }) {
  const classes = useStyles()

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    )
  }, [])

  return (
    <AppBar color="primary" position="sticky">
      <Container maxWidth="lg">
        <Toolbar className={classes.root}>
          <Typography variant="h5" className={classes.title}>
            {siteTitle}
          </Typography>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">About</Button>
          <IconButton>
            <Icon className={"fab fa-github " + classes.icon}></Icon>
          </IconButton>
          <IconButton>
            <Icon className={"fab fa-linkedin " + classes.icon}></Icon>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
