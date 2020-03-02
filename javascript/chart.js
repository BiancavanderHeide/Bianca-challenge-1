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

var ctx = document.getElementById('myChartTwo');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'N2',
            backgroundColor: 'red',
            data: [78.08]
        },
        {
            label: 'O2',
            backgroundColor: 'yellow',
            data: [20.95]
        },
        {
            label: 'AR',
            backgroundColor: 'blue',
            data: [0.93]
        },
        {
            label: 'CO2',
            backgroundColor: 'green',
            data: [0.0018]
        // },
        // {
        //     label: 'Ne',
        //     backgroundColor: 'white',
        //     data: [0.00052]
        // },
        // {
        //     label: 'He',
        //     backgroundColor: 'grey',
        //     data: [0.00022]
        // },
        // {
        //     label: 'CH4',
        //     backgroundColor: 'pink',
        //     data: [0.00013]
        // },
        // {
        //     label: 'Kr',
        //     backgroundColor: 'black',
        //     data: [0.00005]
        // },
        // {
        //     label: 'N2O',
        //     backgroundColor: 'orange',
        //     data: [0.00005]
        // },
        // {
        //     label: 'H2',
        //     backgroundColor: 'brown',
        //     data: [0.000008]
        // },
        // {
        //     label: 'Xe',
        //     backgroundColor: 'purple',
        //     data: [0.001]
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
                stacked: true,
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true
            }],
            xAxes: [{
                stacked: true,
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true,
            }]

        }
    }
});


var zwaartekracht=9.81;
ZwNewton.innerHTML=zwaartekracht;