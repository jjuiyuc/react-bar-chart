import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

import Chart from "../component/Chart";

const DataChart = (props) => {
    const {
        site_id,
        household_ordinary_m,
        household_ordinary_w,
        household_single_m,
        household_single_w,
    } = props;

    //localstate
    // const itemId = props.match.params.itemId;
    // // console.log(itemId);
    const [itemImgData, setItemImgData] = useState([]);
    const [infoData, setInfoData] = useState({});

    //僅做擷取資料用途
    const fetchData = async () => {
        const res = await fetch(
            `https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-041`
        );
        const data = await res.json();
        console.log("data", data);
        return data;
    };

    //一開始載入
    useEffect(() => {
        // console.log("changed");

        (async () => {
            //1. 獲得資料data
            const rawData = await fetchData(brandOrCategory, name);
            const headData = rawData[0]; //標題資料
            const cardData = rawData[1]; //卡片資料
            setItemHeadData(headData);
            // console.log("cardData", cardData);

            setOriginalCardData(cardData);
            setItemCardData(cardData);
        })();
        // console.log("born");
        setFilterToggle(false);
        setOrderToggle(false);
        setOrder("");
    }, [name]);

    // return (
    //     <>
    //         <div className="item-details-main-content">
    //             <div className="item-details-container d-flex">
    //                 <
    //                     itemName={itemInfosData.itemName}
    //                     itemSize={itemInfosData.itemSize}
    //                     itemPrice={itemInfosData.itemPrice}
    //                     itemDiscription={itemInfosData.discription}
    //                     fragranceDiscription={itemInfosData.fragranceDetails}
    //                     itemId={itemId}
    //                     wish={itemWish}
    //                     itemimg={`http://localhost:3030/images/items/${itemImgData[0]}.png`}
    //                 />
    //             </div>
    //         </div>
    //     </>
    // );
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DataChart)
);
