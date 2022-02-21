const dates = () => {

    const date = new Date();

    const dateTypes = [
        date.getDay(),
        date.getFullYear(),
        date.getHours(),
        date.getMilliseconds(),
        date.getMinutes(),
        date.getMonth(),
        date.getSeconds(),
        date.getTime(),
    ]

    for (let i = 0; i < dateTypes.length; i++) {
        console.log(dateTypes[i])
    }

}

export default dates;
