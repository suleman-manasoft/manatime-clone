window.onload = function () {

    var ctx = document.getElementById("chart");
    var myChart = ctx && new Chart(ctx.getContext('2d') , {
        type: 'bar',
        data: {
            labels: ["41", "42", "43", "44"],
            datasets: [{
                label: 'Registrations',
                backgroundColor: "#637782;",
                data: [25, 0, 0, 0],
            }, {
                label: 'New Subscriptions',
                backgroundColor: "#23C6C8",
                data: [0, 15, 0, 0],
            }, {
                label: 'Renewals',
                backgroundColor: "#E49E50",
                data: [0, 0, 10, 0],
            }, {
                label: 'Expirations',
                backgroundColor: "#D04D5B",
                data: [0, 0, 0, 12],
            }],
        },
        options: {
            tooltips: {
                displayColors: true,
                callbacks: {
                    mode: 'x',
                },
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        stepSize: 15
                    },
                    type: 'linear',
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: { position: 'bottom' },
        }
    });



    var popCanvas = document.getElementById("popChart");
    if(popCanvas){
    var main_arr = [
        [{ x: 5, y: 20, r: 3 }, { x: 7, y: 5, r: 3 }, { x: 8, y: 26, r: 3 }, { x: 4, y: 70, r: 3 }, { x: 3, y: 77, r: 3 }, { x: 9, y: 65, r: 3 }, { x: 5, y: 40, r: 3 }, { x: 6, y: 55, r: 3 }],
        [{ x: 5, y: 2, r: 3 }, { x: 9, y: 3, r: 3 }, { x: 5, y: 10, r: 3 }, { x: 2, y: 3, r: 3 }],
    ];
    var colors = ['#000', 'red'];
    var labels = ["", "Average between 0 and 2 absences filed per user"]
    var popData = {
        data: {
            datasets: (function (main_arr) {
                var out = [];
                for (var i = 0; i < main_arr.length; i++) {
                    out.push({
                        label: labels[i],
                        data: main_arr[i],
                        backgroundColor: colors[i]
                    });
                }
                console.log(out);
                return out;
            })(main_arr)
        },
        options: {
            legend: {
                position: "bottom",
                labels: {
                    filter: function (item, chart) {
                        return item.text !== "";
                    }
                }
            }
        }

    };

    var bubbleChart = new Chart(popCanvas, {
        type: 'bubble',
        ...popData
     })
    }

    $('select.userSelect').select2({
        theme: "bootstrap",
        placeholder: "",
        width: 'auto',
        minimumResultsForSearch: Infinity,
        placeholder: 'Show List'
    });

    $(".simple-select").select2({
        theme: "bootstrap",
        placeholder: "",
        width: 'auto'
    });

    $('.input-group.date, .input-daterange').datepicker({
        todayBtn: 'linked',
        language: "fr",
        todayHighlight: true,
        clearBtn: true,
        autoclose: true,
        format: "yyyy-mm-dd",
    });    
}
