$( document ).ready(function() {  
    google.charts.load('44', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
});
  
function drawChart() {
    var data = new google.visualization.DataTable();
        
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Amount');
        
        data.addRows([
            ['Food',Number(food)],
            ['Grocery',Number(grocery)],
            ['Cloth',Number(cloth)],
            ['Other',Number(other)]
            ]);

    var options = {
        title: 'Money Saved',
        legend: {position:'bottom'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

