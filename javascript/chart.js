var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1 uur', '2 uur', '3 uur', '4 uur', '5 uur', '6 uur', '7 uur', '8 uur', '9 uur', '10 uur', '11 uur', '12 uur', '13 uur', '14 uur', '15 uur', '16 uur', '17 uur'], //x-as
        datasets: [{
            label: 'Afstand afgelegd over tijd',
            backgroundColor: '#808080',
            borderColor: '#ffffff',
            color: '#ffffff',
            data: [0, 17, 45, 63, 84, 99, 127, 143 , 165, 197, 268, 297, 349, 423, 482, 581, 636] //y-as
        }]
    },

    // Configuration options go here
    options: {
    	legend: {
            fontColor: "white",
            fontSize: 18
        },
        scales: { 
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]

        }
    }
});
