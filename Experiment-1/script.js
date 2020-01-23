    //Loads Google Charts
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawchart);

    //Draw the charts and set chart values
    function drawchart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours Per Day'],
            ['Work', 8],
            ['Commute', 2],
            ['Eat', 2],
            ['Sleep', 8],
            ['Coding', 4]
        ]);

        //Adding title, height width to chart
        var options = {
            'title': 'My Daily Routine',
            'width': '1280',
            'height': '720'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options)


    }