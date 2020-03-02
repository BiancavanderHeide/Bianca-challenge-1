var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // het type chart
    type: 'line',

    // de data voor de dataset
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

    // styling opties
    options: {
    	legend: {
            fontColor: "white",
            fontSize: 18
        },
        scales: { 
            yAxes: [{ //y-as
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true,
                    stepSize: 50
                }
            }],
            xAxes: [{ //x-as
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
ctx.height = 450;
var chart = new Chart(ctx, {
    // type chart
    type: 'bar',

    // de data voor de dataset
    data: {
        datasets: [{
            label: 'N2',
            backgroundColor: '#cc6600',
            data: [78.08]
        },
        {
            label: 'O2',
            backgroundColor: '#ffcc00',
            data: [20.95]
        },
        {
            label: 'AR',
            backgroundColor: '#009933',
            data: [0.93]
        },
        {
            label: 'CO2',
            backgroundColor: '#0066cc',
            data: [0.0018]
        }]
    },

    // syling opties
    options: {
        legend: {
            fontColor: "white",
            fontSize: 18,
            position: 'right',
            reverse: true
        },
        scales: { 
            yAxes: [{
                stacked: true, //gestapelde bar
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true,
                    stepSize: 10
                }
            }],
            xAxes: [{
                stacked: true, //gestapelde bar
                barThickness: 60,
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true
                }
            }]

        }
    }
});

//de newton bij de zwaartekracht section verandert door input
var zwaartekracht=9.81;
ZwNewton.innerHTML=zwaartekracht;