// 使用立即执行函数避免变量污染
(function () {
    let myChart = echarts.init(document.querySelector('.bar .chart'));
    let option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {
    let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    let myChart = echarts.init(document.querySelector('.bar2 .chart'));
    let option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: 'category',
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff'
            },

        },
        {
            show: true,
            data: [702, 350, 610, 793, 664],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#fff"
                }
            }
        }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                barCategoryGap: 50,
                barWidth: 10,
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    }
                },
                label: {
                    show: true,
                    position: 'inside',
                    fomatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {
    var yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: {
                color: "#4c9bfd"
            },
            right: "10%"
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" // 分割线颜色
                }
            }
        },
        series: [
            {
                name: "新增粉丝",
                type: "line",
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: "新增游客",
                type: "line",
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    $(".line h2").on("click", "a", function () {
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    });
})();