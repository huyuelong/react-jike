import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({ title }) => {
    const chartRef = useRef();
    useEffect(() => {
        // 1.获取渲染图表的dom节点
        const chartDom = chartRef.current;
        // 2.图表初始化生成图表实例对象
        const myChart = echarts.init(chartDom);
        // 3.准备图表参数
        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10, 40, 70],
                    type: 'bar'
                }
            ]
        };
        // 4.使用图表参数完成图表的渲染
        option && myChart.setOption(option);
    }, [])
    return <div>
        <div ref={chartRef} style={{ width: 600, height: 400 }}></div>
    </div>
}

export default BarChart