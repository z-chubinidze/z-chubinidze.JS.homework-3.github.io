function gamotvla() {
    var x = document.getElementById('numbers').value;

    if (x == 0) {
        window.alert("არ შეიძლება იყოს 0-ის ტოლი");
    }else if (x < 0) {
        window.alert("ჩაწერილი რიცხვი უარყოფითია");
    }else if (x > 0) {
        window.alert("ჩაწერილი რიცხვი დადებითია");
    }

}