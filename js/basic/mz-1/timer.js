function czas()
        {
            var day = new Date();
            var dzis = day.getDate();
            var godz = day.getHours();
            if (godz<10) godz = "0"+godz;
            var min = day.getMinutes();
            if (min<10) min = "0"+min;
            var sek = day.getSeconds();
            if (sek<10) sek = "0"+sek;   

            document.getElementById("zegar").innerHTML = godz+"/"+min+"/"+sek;

            setTimeout("czas()",1000);
        }