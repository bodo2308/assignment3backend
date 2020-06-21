// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import "./FuelQuoteForm.css"
import { useHistory } from "react-router-dom";

import {
  TextField,
  Box,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardHeader: {
    textAlign: "center",
  },
}));

function FQFORM(props) {
  const classes = useStyles();
  const history = useHistory();

  const [gallonsRequested, setGallonsRequested] = React.useState("");
  const [deliveryAddress, setDeliveryAddress] = React.useState("");
  const [deliveryDate, setDeliveryDate] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [amountDue, setAmountDue] = React.useState("");

  return (
    <>
    <Grid container justify="space-between">
      <Grid item xs style={{ marginLeft: 15 }}>
        <Card
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid black",
          }}
        >
          <CardHeader className={classes.cardHeader} title="Fuel Quote" />
          <Divider />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  label="Gallons Requested"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setGallonsRequested(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={gallonsRequested}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Delivery Date"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setDeliveryDate(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={deliveryDate}
                />
              </Grid>
            </Grid>
            <Box p={1} />
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  label="Price"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={price}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Amount Due"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setAmountDue(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={amountDue}
                />
              </Grid>
            </Grid>
            <Box p={1} />
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  label="Delivery Address"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setDeliveryAddress(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={deliveryAddress}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <div class="container" >
    <input type="submit" value="Get Quote"/> 
    </div>
    </>
  );
}

export default FQFORM;
