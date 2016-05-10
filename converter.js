// init
function convertTable() {
    reset();
    var data = document.getElementById("tableTextarea").value;
    convertHtmlToJson(data);
}

function convertHtmlToJson(data) {
    $('#htmlTable').append(data);
    var keys = findKeys();
    var newJson = findValues(keys);
    var myJsonString = JSON.stringify(newJson);
    showResult(myJsonString); 
    
}

function findKeys() {
    var table = $('#htmlTable table');
    var keys = [];

    if($('table thead th').length) {
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

    $('#htmlTable table').find('tr').first().remove();

    $('#htmlTable table tr').each(function() {
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
    $('#jsonTextarea').val(res);
}

$("textarea").keyup(function(event){
    if(event.keyCode == 13){
        $("#convertButton").click();
    }
});

function reset() {
    $('#htmlTable').html('');
}

// convert array of objects to table
function convertJson() {
    var data = document.getElementById("jsonTextarea").value;
    console.log("Data: ", data, "typeof: ", typeof data);
    data = JSON.parse("[" + data + "]")[0];

    var jsonTable = $('#jsonTable');
    jsonTable.append("<table><thead><tr></tr></thead><tbody></tbody></table>");

    var keys = Object.keys(data[0]);

    keys.map(function(key){ 
       var newKey = '<th>' + key + '</th>';
       $(jsonTable).find('thead tr').append(newKey);
    });

    for(var i = 0; i < data.length; i++) {
        var newRowObj = data[i];
        var values = [];

        for(key in newRowObj) {
            if(newRowObj.hasOwnProperty(key)) {
                var value = newRowObj[key];
                values.push(value);
            }
        }
        createNewRowInTable(values, $(jsonTable));  
    }

    var result = jsonTable.html();
    showTable(result);
}

function createNewRowInTable(values, table) {
    var tds = '';

    for(var i = 0; i < values.length; i++) {
        tds = tds + "<td>" + values[i] + "</td>";
    }

    var tr = "<tr>" + tds + "</tr>";
    table.find('tbody').append(tr);
}

function showTable(table) {
    $('#tableTextarea').val(table);
}

// reset all
function resetAll() {
    $('#jsonTable').html('');
    $('#htmlTable').html('');
    $('#tableTextarea').val('');
    $('#jsonTextarea').val('');
}
