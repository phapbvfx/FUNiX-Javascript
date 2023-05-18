"use strict";

const fetchData = fetch("https://disease.sh/v3/covid-19/nyt/usa")
  .then((res) => res.json())
  .catch((e) => console.log(e))
  .finally(() => console.log("fetch data completed"));

const plotData = async (data) => {
  const a = await data;

  const keys2022 = [];
  const cases2022 = [];

  const weekyKeys = [];
  const weekyCases = [];
  const time = 24 * 60 * 60;
  let timeDays = 0;

  a.filter(
    (b) =>
      new Date(b.date).getFullYear() >= 2021 &&
      new Date(b.date).getFullYear() <= 2022
  ).reduce((acc, curr, index, array) => {
    if (index === 0) {
      acc = new Date(array[0].date).getTime();
      weekyKeys.push(array[0].date);
      weekyCases.push(array[0].cases);
    }
    if (acc === 0) {
      acc = new Date(curr.date).getTime();
    }
    timeDays = new Date(curr.date).getTime() - acc;
    if (timeDays / time / 1000 === 6) {
      weekyKeys.push(curr.date);
      weekyCases.push(curr.cases);
      acc = 0;
    }
    return acc;
  }, 0);

  // weeky
  weekyKeys.unshift("dates");
  weekyCases.unshift("cases");

  bb.generate({
    bindto: "#covid-all-us-cases-weeky",
    data: {
      x: "dates",
      types: "line",

      columns: [weekyKeys, weekyCases],
      tick: {
        fit: true,
        multiline: false,
        autorotate: true,
        culling: false,
        count: 10,
      },
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          fit: true,
          multiline: false,
          autorotate: true,
          culling: false,
          count: 10,
          format: "%m-%d-%Y %H:%M:%S",
        },
        clipPath: false,
      },
    },
  });

  // monthly 2022
  a.filter(
    (b) =>
      new Date(b.date).getFullYear() >= 2021 &&
      new Date(b.date).getFullYear() <= 2022
  ).reduce((acc, curr) => {
    if (new Date(curr.date).getMonth() === acc) {
      cases2022[acc] = curr.cases;
      keys2022[acc] = curr.date;
    }
    return new Date(curr.date).getMonth();
  }, 0);

  keys2022.unshift("dates");
  cases2022.unshift("cases");

  bb.generate({
    bindto: "#covid-all-us-cases-2022",
    data: {
      x: "dates",
      types: "line",

      columns: [keys2022, cases2022],
      tick: {
        fit: true,
        multiline: false,
        autorotate: true,
        culling: false,
        count: 10,
      },
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          fit: true,
          multiline: false,
          autorotate: true,
          culling: false,
          count: 10,
          format: "%m-%d-%Y %H:%M:%S",
        },
        clipPath: false,
      },
    },
  });

  const keys = a
    .filter(
      (b) =>
        new Date(b.date).getFullYear() >= 2021 &&
        new Date(b.date).getFullYear() <= 2022
    )
    .map((b) => b.date);
  const cases = a
    .filter(
      (b) =>
        new Date(b.date).getFullYear() >= 2021 &&
        new Date(b.date).getFullYear() <= 2022
    )
    .map((b) => b.cases);

  keys.unshift("dates");
  cases.unshift("cases");

  bb.generate({
    bindto: "#covid-all-us-cases",
    data: {
      x: "dates",
      types: "line",

      columns: [keys, cases],
      tick: {
        fit: true,
        multiline: false,
        autorotate: true,
        culling: false,
        count: 10,
      },
    },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          fit: true,
          multiline: false,
          autorotate: true,
          culling: false,
          count: 10,
          format: "%m-%d-%Y %H:%M:%S",
        },
        clipPath: false,
      },
    },
  });
};

plotData(fetchData);
