import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Container, Dropdown, Table, Flag, Header } from "semantic-ui-react";
import moment from "moment";
import { Line } from "react-chartjs-2";

const Covid19 = () => {
  const [covidData, setCovidData] = useState([]);
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("ir");
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((resp) => resp.json())
      .then((d) => {
        setDate(new Date(d.Date));
        setCovidData(d.Countries);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.covid19api.com/dayone/country/${country}`)
      .then((resp) => resp.json())
      .then((d) => {
        setCountryData(d);
      })
      .catch((e) => {
        console.log(e);
        setCountryData([]);
      });
  }, [country]);

  const countryOptions = [
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
    { key: "al", value: "al", flag: "al", text: "Albania" },
    { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
    { key: "as", value: "as", flag: "as", text: "American Samoa" },
    { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
    { key: "ao", value: "ao", flag: "ao", text: "Angola" },
    { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
    { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
    { key: "am", value: "am", flag: "am", text: "Armenia" },
    { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
    { key: "au", value: "au", flag: "au", text: "Australia" },
    { key: "at", value: "at", flag: "at", text: "Austria" },
    { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
    { key: "by", value: "by", flag: "by", text: "Belarus" },
    { key: "be", value: "be", flag: "be", text: "Belgium" },
    { key: "bz", value: "bz", flag: "bz", text: "Belize" },
    { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  ];

  const CountryDropDown = () => (
    <Dropdown
      clearable
      fluid
      multiple
      search
      selection
      options={countryOptions}
      placeholder="Select Country"
    />
  );

  return (
    <Layout>
      <Container>
        <CountryDropDown />
        <div id="country-plot">
          <Line
            data={{
              labels: countryData.map((d) => moment(d.Date).format("MMM YYYY")),
              datasets: [
                {
                  label: `N Deaths for ${country.toUpperCase()}`,
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 0,
                  pointHitRadius: 10,
                  data: countryData.map((d, i) => {
                    if (i > 0)
                      return countryData[i].Deaths - countryData[i - 1].Deaths;
                    else return countryData[0].Deaths;
                  }),
                },
              ],
            }}
          />
        </div>
        <Header as="h2">
          Top countries for daily deaths as of{" "}
          {moment(date).format("DD MMM YYYY")}
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nº</Table.HeaderCell>
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
