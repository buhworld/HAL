function updateTime() {
    const now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    const formattedDateTime = `${year}/${month}${day} ${hour}:${minute}:${second}`;

    const dateTimeElement = document.getElementById('output');
}

updateTime();

setInterval(updateTime, 1000);