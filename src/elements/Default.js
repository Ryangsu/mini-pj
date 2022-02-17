import React from "react";

const Default = (props) => {
    const { item_url, title, price, description, date } = props;
    console.log(props)
    return 
}

export default Default;


Default.defaultProps = {
    item_url: "",
    title: "",
    price: "",
    description: "",
    date: "",
};