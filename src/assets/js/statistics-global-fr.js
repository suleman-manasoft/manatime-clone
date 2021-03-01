window.onload = function () {  
    var mymap = L.map('mapid',{
      scrollWheelZoom: false,
    }).setView([56.9,-22], 7.4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 10,
      minZoom:0,
      id: 'mapbox/streets-v11',
      tileSize: 452,
      zoomOffset: -1,
    //   accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    var marker = L.marker([57.5, -21]).addTo(mymap);

    var marker_1 = L.marker([55.5, -19]).addTo(mymap);
    var marker_2 = L.marker([57.8, -21]).addTo(mymap);
    var marker_3 = L.marker([55.5, -21]).addTo(mymap);

    var marker_4 = L.marker([56.5, -23]).addTo(mymap);
    var marker_5 = L.marker([57, -24]).addTo(mymap);
    var marker_6 = L.marker([56.5, -21]).addTo(mymap);

    var marker_7 = L.marker([56.5, -19]).addTo(mymap);
    var marker_8 = L.marker([57, -22]).addTo(mymap);
    var marker_9 = L.marker([57.5, -22]).addTo(mymap);

    var marker_10 = L.marker([56.5, -19]).addTo(mymap);
    var marker_11 = L.marker([57, -21]).addTo(mymap);
    var marker_12 = L.marker([57.5, -20]).addTo(mymap);

    var marker_13 = L.marker([55.2, -19]).addTo(mymap);
    var marker_14 = L.marker([57, -21]).addTo(mymap);
    var marker_15 = L.marker([55, -21]).addTo(mymap);

    var newpopup = L.popup({
        closeOnClick: false,
        closeButton: false,
        // autoClose: false
      }).setContent("<b>Company name</b><br>I am marker 121 street BDG<br/>91000<br/>evry<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>");

    marker_1.bindPopup("<b>Company name</b><br>I am marker  street name<br/>91000<br/>Cermont<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_2.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_3.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_4.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_5.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_6.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_7.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_8.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_9.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_10.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_11.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_12.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_13.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_14.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker_15.bindPopup("<b>Company name</b><br>I am marker no street name<br/>91000<br/>France<br/><span><i class='fa fa-building' style='color:gray;'></i></span><span style='color:gray;'>&nbsp;&nbsp;125</span>",{closeButton:false,closeOnClick: false,}).openPopup();
    marker.bindPopup(newpopup).openPopup();

    BarGraph("SummaryAbsences",[10,25,20,25,10,25,30,36,38,42,45,47,35,49,30,45,35,20,32,35,39,28,25,20,10,5])
    BarGraph("SummaryUsers",[10,5,8,13,10,5,13,16,18,20,21,23,10,22,24,26,28,30,32,33,34,28,25,20,10,5])
    BarGraph("SummaryAddHours",[5,3,8,13,10,5,13,16,10,15,13,3,10,20,14,20,6,12,8,4,15,11,7,10,10,5])
    BarGraph("SummaryPresences",[1,2,3,4,5,6,7,8,10,11,12,13,14,12,11,10,9,8,7,6,5,4,3,2,1,0])
    BarGraph("SummaryExpenses",[2,3,2,1,2,3,2,1,3,4,2,1,3,4,2,1,3,1,1,4,2,4,5,3,3,2,2,5])
    BarGraph("SummaryDocuments",[5,3,8,13,10,5,13,16,10,15,13,3,10,20,14,20,6,12,8,4,15,11,7,10,10,5])
    BarGraph("SummaryEvents",[2,0,2,1,2,3,2,1,3,4,2,1,3,4,2,1,3,1,1,4,2,4,2,3,1,3,2,1])
    Graph();
    };
  
  let myChart;
function Graph() {
  var ctx = document.getElementById("pie-chart").getContext("2d");
		
		if(typeof myChart !== "undefined") {
			myChart.destroy();
		}
    myChart = new Chart(ctx, {
    type:'pie',
    data:{
      datasets:[{
        data:[260,90,45,35,20],
        backgroundColor:['#A0052A','#53A005','#058EA0','#A00591','#A09A05'],
      }],
      labels:['le-de-France','Hausts-de-France','Grand Est','Nouvelle-Aquitaine','Bretagne']
    },
    options: {
      legend:{
        display:false
      },
      responsive: true,
      maintainAspectRatio: false,
  }
  });
}
function BarGraph(id,array) {
  var ctx = document.getElementById(id).getContext("2d");		
    new Chart(ctx, {
    type:'bar',
    data:{
      datasets:[{
        data:array,
        backgroundColor:['#D2D2D2','##D2D2D2','#D2D2D2','#D2D2D2','#D2D2D2','#D2D2D2','##D2D2D2','#D2D2D2','#D2D2D2','#D2D2D2','#D2D2D2','#D2D2D2'
        ,'#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D','#9D9D9D'
      ],
      }],
      labels:["January", "Febuary" , "March" , "April", "May" , "June" ,"July" ,"August","September","October","November","December","January", "Febuary" , "March" , "April", "May" , "June" ,"July" ,"August","September","October","November","December"]
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
            stacked: false,
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
      legend:{
        display:false
      },
      responsive: true,
      maintainAspectRatio: false,
  }
  
  });
}