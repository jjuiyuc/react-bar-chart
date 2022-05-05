import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";

import { BarChart, GridlineSeries, Gridline } from "reaviz";

const Chart = () => {
    const [data, setData] = useState({});
    const mockData = [
        { key: "household_ordinary_m", data: 100000 },
        { key: "household_ordinary_f", data: 290000 },
        { key: "household_single_m", data: 5202020 },
        { key: "household_single_", data: 13000 },
    ];

    useEffect(() => {
        // componentDidMount
        fetch("https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/108")
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                const responseData = data.responseData;
                const obj = {};
                for (let i = 0; i < responseData.length; i++) {
                    const d = responseData[i];
                    const {
                        site_id,
                        household_ordinary_m,
                        household_ordinary_f,
                        household_single_m,
                        household_single_f,
                    } = d;
                    if (obj[site_id]) {
                        const current = obj[site_id];
                        obj[site_id] = {
                            household_ordinary_m:
                                current.household_ordinary_m +
                                Number(household_ordinary_m),
                            household_ordinary_f:
                                current.household_ordinary_f +
                                Number(household_ordinary_f),
                            household_single_m:
                                current.household_single_m +
                                Number(household_single_m),
                            household_single_f:
                                current.household_single_f +
                                Number(household_single_f),
                        };
                    } else
                        obj[site_id] = {
                            household_ordinary_m: Number(household_ordinary_m),
                            household_ordinary_f: Number(household_ordinary_f),
                            household_single_m: Number(household_single_m),
                            household_single_f: Number(household_single_f),
                        };
                }

                const DistrictList = Object.keys(obj); // ['板橋區', ;'三重區', ...]
                const order = [
                    "household_ordinary_m", // { key: household_ordinary_m, data: ... }
                    "household_ordinary_f",
                    "household_single_m",
                    "household_single_f",
                ];

                const dataList = DistrictList.reduce((acc, cur) => {
                    const districtData = obj[cur];
                    acc[cur] = order.map((orderKey) => {
                        return { key: orderKey, data: districtData[orderKey] };
                    });
                    return acc;
                }, {});
                console.log({ obj, dataList, DistrictList });
            });
    }, []);
    return (
        <div className="chart-container flex align-items-center">
            <BarChart
                className="bar-chart"
                width={550}
                height={450}
                data={mockData}
                gridlines={
                    <GridlineSeries line={<Gridline direction="all" />} />
                }
            />
        </div>
    );
};

export default Chart;

const realData = {
    板橋區: {
        household_ordinary_m: 682,
        household_single_m: 116,
        household_ordinary_f: 734,
        household_single_f: 128,
    },
    三重區: {
        household_ordinary_m: 682,
        household_single_m: 116,
        household_ordinary_f: 734,
        household_single_f: 128,
    },
    鶯歌區: {},
    萬里區: {},

    //...
};

const realData2 = {
    板橋區: [
        { key: "household_ordinary_m", data: 682 },
        { key: "household_ordinary_f", data: 734 },
        { key: "household_single_m", data: 116 },
        { key: "household_single_f", data: 128 },
    ],
};
