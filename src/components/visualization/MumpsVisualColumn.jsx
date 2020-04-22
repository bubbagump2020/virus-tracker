import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const MumpsVisualColumn = (props) => {

    const filteredData = props.filteredData
    let chartData = []
    let cumulativeCasesThisYear = 0

    const chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: `Weekly ${props.diseaseChoice} Cases in the US`
        },
        series: [
            {
                data: chartData
            }
        ]
    }

    const createDataChart = () => {
        return(
            <div>
                <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
            </div>
        )
    }

    const createChartData = (filteredData) => {
        filteredData.map(dataPoint => {
            cumulativeCasesThisYear = parseInt(dataPoint.mumps_cum_2020)
            let newDataPoint = {
                x: parseInt(dataPoint.mmwr_week),
                y: parseInt(dataPoint.mumps_current_week)

            }
            chartData.push(newDataPoint)
        })
    }

    return(
        <div>
            {createChartData(filteredData)}
            {createDataChart()}
            <p>Total US Cases for 2020: {cumulativeCasesThisYear}</p>
        </div>
    )
}

export default MumpsVisualColumn;