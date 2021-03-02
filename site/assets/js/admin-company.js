$(document).ready(function () {
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
    
    $(".btn-custom-group-toggle button").click(function(){
        $(this).closest(".btn-custom-group-toggle").find("button").removeClass("active");
        $(this).addClass("active");
    })

    $(".summaryChart canvas").each(function () {
        var ctx = document.getElementById($(this).attr("id"));
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ["Jan, 2020", "Feb, 2020", "Mar, 2020", "Apr, 2020", "May, 2020", "Jun, 2020", "Jul, 2020",
                        "Aug, 2020", "Sep, 2020", "Oct, 2020", "Nov, 2020", "Dec, 2020", "Jan, 2021", "Feb, 2021", "March, 2021", "April, 2021", "May, 2021", "June, 2021", "July, 2021",
                        "August, 2021", "September, 2021", "October, 2021", "November, 2021", "December, 2021"],
                    datasets: [{
                        label: 'January',
                        backgroundColor: "#D2D2D2",
                        data: [25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    }, {
                        label: 'February',
                        backgroundColor: "#D2D2D2",
                        data: [0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    }, {
                        label: 'March',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    }, {
                        label: 'April',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'May',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'June',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'July',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'August',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'September',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'October',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'November',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'December',
                        backgroundColor: "#D2D2D2",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'January',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'February',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'March',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'April',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'May',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'June',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'July',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'August',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'September',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'October',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'November',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
                        barPercentage: 0.8
                    },
                    {
                        label: 'December',
                        backgroundColor: "#9D9D9D",
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
                        barPercentage: 0.8
                    }],
                },
                options: {
                    tooltips: {
                        displayColors: true,
                        callbacks: {
                            label: function(tooltipItem) {
                                return " "+tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false,
                                tickMarkLength: 0
                            },
                            ticks: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false,
                                tickMarkLength: 0
                            },
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                stepSize: 15,
                                display: false
                            },
                            type: 'linear',
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { display: false },
                }
            });
        }
    })
});

$(function(){
    $(".alphabetsList .alphabet").tooltip({
        placement: "top"
    });
    $(".mail").tooltip({
        placement: "left"
    });
    $(".leaveCategory").tooltip({
        placement: "top"
    });
    $(".startAndEndAbsence").tooltip({
        placement: "top"
    });
    $(".startAndEndAddIcon").tooltip({
        placement: "right"
    });
});