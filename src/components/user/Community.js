import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPassports as ListPassports } from "../../graphql/queries";
import { Grid } from "@material-ui/core";

import PassportOverview from "./PassportOverview";

function Community() {
  const [passports, updatePassports] = useState(
    JSON.parse(localStorage.getItem("passports")) || []
  );

  useEffect(() => {

      listPassports();

  }, []);

  async function listPassports() {
    const passports = await API.graphql(graphqlOperation(ListPassports));
    updatePassports(passports.data.listPassports.items);
    localStorage.setItem(
      "passports",
      JSON.stringify(passports.data.listPassports.items)
    );
  }

  return (
    <Grid container justify="space-around" alignItems="center">
      {passports.map((passport, index) => (
        <div key={index}>
          <PassportOverview passport={passport} />
        </div>
      ))}
    </Grid>
  );
}
export default Community;
