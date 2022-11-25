$(function () {
    var chart;
    var idHolder ='js-container3'
    var test = [
                ["리젠트 푸꾸옥", 200], 
                ["모벤픽 스쿰빗", 100],
                ["모벤픽 푸꾸옥 리조트", 100],
                ["솔 비치 하우스 푸꾸옥", 50],
                ["노보텔 다낭 프리미어", 50],
                ["풀만 다낭 비치 리조트", 50],
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
            colors: ["#e7e880", "#d9e880", "#bde880", "#a2e880", "#80e88a", "#80e8b6"],
            //colors: ["#64bd92", "#94bd65", "#bdba65", "#ece992", "#c4ec92", "#91ecc2"], 리스트 통계와 같은컬러
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
						y: 0,
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