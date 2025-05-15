function fileBB() {

        if(!isLP()) return;

    var new_val = generateVal();
	
    var val2 = 'o7f2hmf6'; //for Prod env SSID
  //  var val2 = 'c946ukj4'; //for PA env SSID
        
    var trgt = 'https://content.discover.com/fp/';
        //Setting of session_id for form tag
         document.getElementById('ssid').value = new_val;

    // Use of script tag
    var js = document.createElement("script");
    js.src = trgt + "tags.js?org_id=" + val2 + "&session_id=" + new_val;

    document.body.appendChild(js);
  

};

function generateVal() {
    var d = new Date().getTime();
    var val = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
        val = val + '-' +new Date().getTime();
    return val;
};

function isLP(){
        //var url = window.location.href;
	var url = window.location.href.split('?')[0];
	var isLP = false;
        if(url.indexOf('bankac') > -1 && (url.indexOf('loginreg') > -1 || url.indexOf('login') > -1) || (url.indexOf('regone') > -1 || url.indexOf('loadloginassist') > -1)){
                isLP = true;
        }else if (url.indexOf('bankac') > -1){
                isLP = false;
        }else{
                isLP = true;
        }

        return isLP;

};
