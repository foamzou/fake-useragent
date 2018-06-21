const mobileUAList = require('./data/mobile');
module.exports = {
    mobile: () => {
        return mobileUAList[random(0, mobileUAList.length - 1)];
    },
    pc: () => {
        //TODO
        return '';
    }
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}