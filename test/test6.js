
const deliveryDate = (day) => {
    var date = new Date();
    date.setDate(date.getDate() + day);
    return date;
}

const distanceDays = (distance) => {
    if (distance < 100) {
        return 0;
    } else if (distance < 300) {
        return 1;
    } else {
        return (Math.trunc(distance / 100) - 2)
    }
}

var maxnumber = 2000;
var distanceArray = [];
var ndistance = 50;
while (distanceArray.length < ndistance) {
    let ceilnum = Math.ceil(Math.random() * maxnumber);
    let exist = false;
    exist = distanceArray.find(element => element === ceilnum);
    if (!exist) {
        distanceArray[distanceArray.length] = ceilnum;
    }
};

for (let i = 0; i < distanceArray.length; i++) {
    console.log("Distance  : " + distanceArray[i] + " Distance Day: " + distanceDays(distanceArray[i]) + " Delivery Date " + deliveryDate(distanceDays(distanceArray[i])));
}





