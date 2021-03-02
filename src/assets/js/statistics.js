$("#btn2").on("click", function () {
  Graph("over 12 months",10,100,["January", "Febuary" , "March" , "April", "May" , "June" ,"July" ,"August","September","October","November","December"],
  [[12, 3, 10, 15 ,6 ,32,9,12,0,43,56,9],[32, 5, 13, 21 ,29 ,38,9,5,0,4,36,9],[22, 33, 11, 5 ,16 ,22,19,32,40,43,26,39],
  [5, 14, 35, 16 ,29 ,32,9,22,0,13,26,19]]);
  $('#btn2').addClass('active').siblings().removeClass('active')
});

$("#btn1").on("click", function () {
  Graph("in the last 8 years",50,500,["2014", "2015" , "2016" , "2017", "2018" , "2019" ,"2020" ,"2021"],
  [[12, 3, 10, 15 ,6 ,32,9,32],[32, 5, 13, 21 ,29 ,38,9,8],[22, 33, 11, 5 ,16 ,22,19,6],
  [5, 14, 35, 16 ,29 ,32,39,52]]);
  $('#btn1').addClass('active').siblings().removeClass('active')
});

$("#btn3").on("click", function () {
  Graph("in 31 weeks",10,100,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  [[12, 3, 10, 15 ,6 ,32,9,12,0,43,56,9,5,2,7,12,15,8,12,23,37,20,21,31,43,43,21,0,40,1,19],
  [2, 13, 1, 5 ,16 ,35,19,32,10,23,26,19,55,22,17,2,35,18,32,13,27,21,21,11,13,23,24,2,46,12,29],
  [12, 23, 30, 25 ,16 ,12,5,12,10,33,26,59,25,12,57,32,25,18,62,33,17,2,11,31,13,53,1,10,10,1,59],
  [32, 23, 20, 35 ,46 ,52,19,12,0,23,56,9,55,32,27,12,15,18,32,23,37,21,2,31,4,43,21,0,40,31,1]
]);
  $('#btn3').addClass('active').siblings().removeClass('active')
});

$("#btn4").on("click", function () {
  Graph("in January 2021",5,50,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    [[12, 3, 10, 15 ,6 ,32,9,12,0,43,5,9,5,2,7,12,15,8,12,23,37,20,21,31,43,43,21,0,40,1,19],
    [2, 13, 1, 5 ,16 ,35,19,32,10,23,26,19,5,22,17,2,35,18,32,13,27,21,21,11,13,23,24,2,46,12,29],
    [12, 23, 30, 25 ,16 ,12,5,12,10,33,26,19,25,12,7,32,25,18,12,33,17,2,11,31,13,5,1,10,10,1,19],
    [32, 23, 20, 35 ,46 ,2,19,12,0,23,6,9,15,32,27,12,15,18,32,23,37,21,2,31,4,43,21,0,40,19,1]
  ]);
 $('#btn4').addClass('active').siblings().removeClass('active')
});

let myChart;
function Graph(title,stepsize,maxsize,label,dataArray) {
  var ctx = document.getElementById("chart").getContext("2d");
		
		if(typeof myChart !== "undefined") {
			myChart.destroy();
		}
    myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: label,
      datasets: [
        {
          label: "Registrations",
          backgroundColor: "#637782;",
          borderColor: "#637782",
          lineTension:0,
          borderWidth: 1,
          pointBorderWidth: 1,
          fill: false,
          steppedline: true,
          data: dataArray[0],
        },
        {
          label: "New Subscriptions",
          backgroundColor: "#23C6C8",
          borderColor: "#23C6C8",
          lineTension:0,
          borderWidth: 1,
          pointBorderWidth: 1,
          pointRadius:3,
          fill: false,
          steppedline: true,
          data: dataArray[1],
        },
        {
          label: "Renewals",
          backgroundColor: "#E49E50",
          borderColor: "#E49E50",
          lineTension:0,
          borderWidth: 1,
          pointBorderWidth: 1,
          pointRadius:3,
          fill: false,
          steppedline: true,
          data: dataArray[2],
        },
        {
          label: "Expirations",
          backgroundColor: "#D04D5B",
          borderColor: "#D04D5B",
          lineTension:0,
          borderWidth: 1,
          pointBorderWidth: 1,
          pointRadius:3,
          fill: false,
          steppedline: true,
          data: dataArray[3],
        },
      ],
    },

    options: {
      title:{
        display:true,
        text: `${dataArray[0].reduce((total,num) => total + num)} / ${dataArray[1].reduce((total,num) => total + num)} / ${dataArray[2].reduce((total,num) => total + num)} / ${dataArray[3].reduce((total,num) => total + num)} ${title}`,
        fontSize:16,
        position:"top"
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0,
                stepSize: stepsize,
                max: maxsize
            },
        }]
    },
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: 'bottom' },
  }
  });
}
window.onload = function () {
  Graph("in January 2021",5,50,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    [[12, 3, 10, 15 ,6 ,32,9,12,0,43,5,9,5,2,7,12,15,8,12,23,37,20,21,31,43,43,21,0,40,1,19],
    [2, 13, 1, 5 ,16 ,35,19,32,10,23,26,19,5,22,17,2,35,18,32,13,27,21,21,11,13,23,24,2,46,12,29],
    [12, 23, 30, 25 ,16 ,12,5,12,10,33,26,19,25,12,7,32,25,18,12,33,17,2,11,31,13,5,1,10,10,1,19],
    [32, 23, 20, 35 ,46 ,2,19,12,0,23,6,9,15,32,27,12,15,18,32,23,37,21,2,31,4,43,21,0,40,19,1]
  ]);

  $(".simple-select").select2({
    theme: "bootstrap",
    placeholder: "",
    width: 'auto'
  });

};
