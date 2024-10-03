function play() {
    console.log('playing...');
}

function sleep() {
    console.log('sleeping...');
}

// 暴露数据
// module.exports = play;
// module.exports = {
//     play,
//     sleep
// 

// exports.play = play;
// exports.sleep = sleep;
exports = play;
exports = sleep;








