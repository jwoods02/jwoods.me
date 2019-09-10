import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Image from "./image"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: "32px",
    paddingBottom: "32px",
    alignItems: "center",
    justifyContent: "center",
  },
}))

function Hero() {
  const classes = useStyles()
  return (
    <Grid container spacing={8} className={classes.root}>
      <Grid item xs={3}>
        <Image></Image>
      </Grid>
      <Grid item xs>
        <Typography variant="h4">
          Hi, I’m James Woods. I’m a software developer in London, UK who builds
          for the web and mobile
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
