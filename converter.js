// init
function convertTable() {
    var data = document.getElementById("tableData").value;
    convertHtmlToJson(data);
}

function convertHtmlToJson(data) {
    $('#table').append(data);
    var keys = findKeys();
    var newJson = findValues(keys);
    var myJsonString = JSON.stringify(newJson);
    showResult(myJsonString); 
    
}

function findKeys() {
    var table = $('#table table');
    var keys = [];

    if($('table thead th').length) {
        console.log($('table thead td').length);
        $('table thead th').each(function() {
            keys.push($(this).html());
        });
    }
    else{
        var keysFromRow = $('table tr:first-child').find('td');
        $(keysFromRow).each(function() {
            keys.push($(this).html());
        });
    }

    return keys;
}

function findValues(keys) {
    var json = [];
    var values = [];
    var newJson = [];

    $('#table table').find('tr').first().remove();

    $('#table table tr').each(function() {
        var subValue = [];
       $('td', this).each(function() {
            subValue.push($(this).html());
       });
       // create new Obj
       var newObj = new Object();
        for(var i = 0; i < keys.length; i++) {
            newObj[keys[i]] = subValue[i];
        }
        newJson.push(newObj);
    });
    return newJson;
}

function showResult(res) {
    $('#jsonData').val(res);
}

$("textarea").keyup(function(event){
    if(event.keyCode == 13){
        $("#convertButton").click();
    }
});

