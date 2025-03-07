options = [{
    backgroundColor: '#0D2753',
    title:{
        text:"各部门数据提供量   ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
    },
    radar: {
        name: {
            textStyle: {
                color: '#05D5FF',
                fontSize: 14,
            },
        },
        shape: 'polygon',
        center: ['50%', '50%'],
        radius: '50%',
        startAngle: 120,
        scale: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(5, 213, 255, .8)',
            },
        },
        startAngle: 90,
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgba(5, 213, 255, .8)', // 设置网格的颜色
            },
        },
        indicator: [
            {
                name: '教育',
                max: 100,
            },
            {
                name: '税务',
                max: 100,
            },
            {
                name: '工商',
                max: 100,
            },
            {
                name: '公安',
                max: 100,
            },
            {
                name: '人社',
                max: 100,
            },
            {
                name: '卫计委',
                max: 100,
            },
        ],
        splitArea: {
            show: false,
        },
    },
    grid: {
        position: 'center',
    },
    polar: {
        center: ['50%', '50%'], // 默认全局居中
        radius: '0%',

    },
    angleAxis: {
        min: 0,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        min: 0,
        interval: 20,
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 10, // 拐点的大小
            itemStyle: {
                normal: {
                    color: '#05D5FF',
                },
            },
            areaStyle: {
                normal: {
                    color: '#05D5FF',
                    opacity: 0.5,
                },
            },
            lineStyle: {
                width: 2,
                color: '#05D5FF',
            },
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return params.value;
                    },
                    color: '#fff',
                },
            },
            data: [
                {
                    value: [20, 25, 35, 100, 90, 95],
                },
            ],
        },
    ],
}, {
    backgroundColor: '#04264f',
    title:{
        text:"流入人口组成     ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    series: [{
        type: 'pie',
        radius: ['30%', '45%'],
        center: ['50%', '50%'],
        top: '20%',
        color: [
            '#01d1d1',
            '#f8d64d',
            '#42a2f7',
        ],

        data: [
            {
                value: 22.89,
                name: '省外流入'
            },
            {
                value: 10.88,
                name: '境外流入'
            },
            {
                value: 68.23,
                name: '省内流入'
            }

        ],
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 10,
                lineStyle: {
                    color: '#3d6995',
                    width: 1,
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 14,
                        color: '#3d6995',
                        align: 'left',
                        padding: [0, 0, 0, 0],
                    },
                    d: {
                        fontSize: 14,
                        color: '#3d6995',
                        align: 'left',
                        padding: [10, 0, 0, 0],
                    }
                }
            }
        }
    }]
}, {
    backgroundColor: '#04264f',
    title:{
        text:"户籍人口组成     ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    color: ['#f7d442', '#3f9ffa'],

    series: [
        {
            name: '统计',
            type: 'pie',
            top:'20%',
            radius: '45%',
            center: ['50%', '50%'],
            data: [{ name: '流入人口', value: 10 }, { name: '常住人口', value: 90 }],
            itemStyle: {
                normal: {
                    label: {
                        formatter: '{b}\n{d}%',
                        show: true,
                    },
                },
                labelLine: { show: true },
            },
        },
    ],
}, {
    backgroundColor: '#04264f',
    title:{
        text:"死亡不一致情况    ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
                {
                    value: '死亡未核实',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '公安与卫生',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '其他与卫生',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },

            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: false,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'red',
                },
            },
            axisTick: false,
            splitLine: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3C548B',
                },
            },
        },
    ],
    grid: {
        left: '20%',
        right: '2%',
        top: '30%',
        bottom: '20%',
    },
    series: [
        {
            type: 'bar',
            barWidth: 35,
            data: [
                {
                    value: 20000,
                    itemStyle: {
                        color: '#3ea1ff',
                    },
                },
                {
                    value: 50000,
                    itemStyle: {
                        color: '#00d3d4',
                    },
                },
                {
                    value: 65000,
                    itemStyle: {
                        color: '#fad444',
                    },
                }
            ],
        },
    ],
}, {
    backgroundColor: '#04264f',
    title:{
        text:"出生未登记情况    ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
                {
                    value: '出生未入学',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '出生未落户',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                }
            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: false,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'red',
                },
            },
            axisTick: false,
            splitLine: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3C548B',
                },
            },
        },
    ],
    grid: {
        left: '20%',
        right: '2%',
        top: '30%',
        bottom: '20%',
    },
    series: [
        {
            type: 'bar',
            barWidth: 50,
            data: [
                {
                    value: 5500,
                    itemStyle: {
                        color: '#3ea1ff',
                    },
                },
                {
                    value: 25000,
                    itemStyle: {
                        color: '#00d3d4',
                    },
                }
            ],
        },
    ],
}, {
    backgroundColor: '#04264f',
    title:{
        text:"地址不一致情况    ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
                {
                    value: '户籍与流口',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '公安与卫计',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                }
            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: false,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'red',
                },
            },
            axisTick: false,
            splitLine: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3C548B',
                },
            },
        },
    ],
    grid: {
        left: '20%',
        right: '2%',
        top: '30%',
        bottom: '20%',
    },
    series: [
        {
            type: 'bar',
            barWidth: 50,
            data: [
                {
                    value: 85000,
                    itemStyle: {
                        color: '#3ea1ff',
                    },
                },
                {
                    value: 45000,
                    itemStyle: {
                        color: '#00d3d4',
                    },
                }
            ],
        },
    ],
},{
    backgroundColor: '#04264f',
    title:{
        text:"婚姻不一致情况    ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
                {
                    value: '民政与法院',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '卫计与民政',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },
                {
                    value: '公安与民政',
                    textStyle: {
                        color: '#fff',
                        fontSize: 8,
                    },
                },

            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: false,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'red',
                },
            },
            axisTick: false,
            splitLine: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3C548B',
                },
            },
        },
    ],
    grid: {
        left: '20%',
        right: '2%',
        top: '30%',
        bottom: '20%',
    },
    series: [
        {
            type: 'bar',
            barWidth: 35,
            data: [
                {
                    value: 10000,
                    itemStyle: {
                        color: '#3ea1ff',
                    },
                },
                {
                    value: 30000,
                    itemStyle: {
                        color: '#00d3d4',
                    },
                },
                {
                    value: 55000,
                    itemStyle: {
                        color: '#fad444',
                    },
                }
            ],
        },
    ],
},{
    backgroundColor: '#04264f',
    title:{
        text:"各单位数据服务访问量排名   ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
        data: ['访问量'],
    },
    grid: {
        left: '3%',
        right: '4%',
        top:  '30%',
        bottom: '20%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        
        splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
    },
    xAxis: {
        type: 'category',
        data: ['公安', '卫计', '人社','工商','民政','教育','地税'],
        axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
    },
    series: [
        {
            name: '访问量',
            type: 'bar',
            barWidth: 20,
            barGap: '40%',
            data: [75000, 65000, 55000,45000,35000,25000,15000],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#8BDCFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#4594E8' // 100% 处的颜色
                    }],
                }
            },
        }
    ]
},{
    backgroundColor: '#04264f',
    title:{
        text:"服务天访问量     ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: ["#F58080", "#47D8BE", "#F9A589"],
        right: '30%',
        top: '90%',
        textStyle:{
            color: '#fff'
        }
    },
    grid: {
        top: '30%',
        left: '3%',
        right: '4%',
        bottom: '20%',
        height: '60%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['10-01', '10-02', '10-03', '10-04', '10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12','10-13','10-14','10-15','10-16'],
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "#fff"
            }
        },
    },
    yAxis: [{
            type: 'value',
            axisLabel: {                
                textStyle: {
                    color: "#fff"
                }}    ,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#cdd5e2'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(193, 207, 220, 1)',
                }
            },
        }
    ],
    series: [{
            name: '云上贵州',
            type: 'line',
            data: [28000,29000,40000,58000,43000,38000,43000,60000,58000,42000,50000,19000,20000,60000,23000,48000],
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 9, //标记的大小
            lineStyle: {
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',
                        colorStops: [{
                                offset: 0,
                                color: '#39a1fe' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#39a1fe' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#39a1fe' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: '#39a1fe',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#39a1fe',
                }
            },
            emphasis: {
                // 鼠标hover上去的时候，拐点的颜色和样式
                itemStyle: {
                    color: '#39a1fe', //颜色
                    borderColor: '#fff', //图形的描边颜色
                    borderWidth: 2, // 描边的线宽
                    shadowBlur: 4, // 图形的阴影大小
                    shadowColor: '#39a1fe', // 图形的阴影颜色
                },
            },
            smooth: false
        },{
            name: '服务云',
            type: 'line',
            data: [58000,70000,70000,80000,68000,60000,59000,80000,80000,80000,80000,63000,56000,44000,57000,67000],
            color: "rgba(112, 119, 242, 1)",
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 9, //标记的大小
            lineStyle: {
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#fad444' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#fad444' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#fad444' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: '#fad444',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#fad444',
                }
            },
            emphasis: {
                // 鼠标hover上去的时候，拐点的颜色和样式
                itemStyle: {
                    color: 'rgba(129, 135, 244, 1)', //颜色
                    borderColor: '#fff', //图形的描边颜色
                    borderWidth: 2, // 描边的线宽
                    shadowBlur: 4, // 图形的阴影大小
                    shadowColor: 'rgba(129, 135, 244, 1)', // 图形的阴影颜色
                },
            },
            smooth: false
        }
    ]
},{
    backgroundColor: '#04264f',
    title:{
        text:"服务分类统计       ////////////",
        textStyle:{
            color: '#bff3ff',
            fontSize: '14px'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
        data: ['访问量'],
    },
    grid: {
        left: '3%',
        right: '4%',
        top:  '30%',
        bottom: '20%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        
        splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
    },
    xAxis: {
        type: 'category',
        data: ['户籍证明', '信息查询', '身份核查'],
        axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
    },
    series: [
        {
            name: '访问量',
            type: 'bar',
            barWidth: 50,
            barGap: '40%',
            data: [25000, 55000, 80000],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#8BDCFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#4594E8' // 100% 处的颜色
                    }],
                }
            },
        }
    ]
}

]