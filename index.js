const mobileUAList = require('./data/mobile');
const pcUAList = require('./data/pc');
module.exports = {
    mobile: () => {
        return mobileUAList[random(0, mobileUAList.length - 1)];
    },
    pc: () => {
        return pcUAList[random(0, pcUAList.length - 1)];;
    }
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
