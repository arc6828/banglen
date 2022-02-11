const number_format = (number,digit=0) => {
    return Number(number).toFixed(digit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default { number_format }