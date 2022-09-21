const urlApexCar= "https://gb47cdc0cd0d1af-productos.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/car/"

function peticionGet(){
    $.ajax({
        url:urlApexCar,
        type: 'GET',
        dataType: 'json',
        success: function(date){
           alert("Funciona");
        }
    })
}