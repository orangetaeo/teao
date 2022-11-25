$(function () {
    var chart;
    var idHolder ='js-container1'
    var test = [
                ["베트남", 500],
                ["일본", 300],
                ["필리핀", 200],
            ]
    
    $(document).ready(function () {
    	
    	// Build the chart
        this.plot1 = new Highcharts.Chart({  //$('#'+ idHolder).highcharts({
            chart: {
              renderTo: idHolder,
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
            },
            credits: { enabled: false },
            colors: ["#53c4cf", "#5196ff", "#6285f4"],
            //colors: ["#44b0ba", "#4285f4"], 리스트 통계와 같은컬러
            tooltip: {
        	    formatter: function () {
                        return '<b>' + this.point.name + '</b>:<br>' + Highcharts.numberFormat(this.y, 0) + ' <b>:</b> ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
                    }
            },
            title: {
                    text: null
            },
            plotOptions: {
                pie: {
                  size:'70%',
                  center:['50%','43%'],
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    //connectorWidth: 0,
                    distance: 5,//-50,
                    color: 'black',
                    formatter: function () {
                      return this.percentage.toFixed(2) + '%';
                    }
                  },
                  showInLegend: true
                }
            },
          legend: {
                    itemStyle: {
                        fontSize: '13px',
                        //fontWeight: 'inherit',
                        fontFamily: 'Noto Sans KR',
                        color: '#0d4480',
                    },
                    enabled: true,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: "bottom", //'middle', //'bottom',//'middle'
		            floating:true,
						symbolHeight: 10,
						symbolWidth: 10,
						y: -5,
                },
          
            series: [{
                type: 'pie',
                name: '',
                innerSize: '70%',
                data: test,
            }]
        });
    });

    
});