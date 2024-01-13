const muLabel= document.getElementById("muLabel");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myLabel.innerHTML= formatTime(date);

    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let AMorPM = hourse >= 12 ? "PM" : "AM";

        hours = (hours % 12) || 12;
        hours= formatZeroes(hours);
        hours= formatZeroes(minutes);
        hours= formatZeroes(seconds);

        return `${hours}: ${miutes}: ${seconds} ${AMorPM}`
    }
    function formatZeroes(time){
        time= time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}