import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Container, Table, Flag } from "semantic-ui-react";

const Covid19 = () => {
  const [covidData, setCovidData] = useState([]);
  const [date, setDate] = useState("");
  const [global, setGlobal] = useState({});

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((resp) => resp.json())
      .then((d) => {
        setDate(new Date(d.Date));
        setCovidData(d.Countries);
        setGlobal(d.Global);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <div>{date.toString()}</div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>N</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>NewDeaths</Table.HeaderCell>
              <Table.HeaderCell>TotalDeaths</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {covidData
              .sort(function compareNumbers(a, b) {
                return b.NewDeaths - a.NewDeaths;
              })
              .slice(0, 50)
              .map((d, i) => {
                console.log(d);
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>
                      <Flag name={d.CountryCode.toLowerCase()} />
                      {d.Country}
                    </Table.Cell>
                    <Table.Cell>{d.NewDeaths}</Table.Cell>
                    <Table.Cell>{d.TotalDeaths}</Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  );
};

export default Covid19;
