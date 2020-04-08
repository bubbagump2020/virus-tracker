import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from 'highcharts/modules/map'
import Highcharts from 'highcharts'
import proj4 from "proj4"
import mapDataUSA from '@highcharts/map-collection/countries/us/us-all.geo.json'
import { FormRadio } from 'shards-react'
highchartsMap(Highcharts)

if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
}



const USAStates = (props) => {
    console.log(props)

    const mapOptions = {
        chart: {
            map: 'countries/us/us-all'
        },
        title: {
            text: 'Map Demo'
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: "Basemap",
                mapData: mapDataUSA,
                borderColor: "#A0A0A0",
                nullColor: "rgba(200, 200, 200, 0.3)",
                showInLegend: false
            }
        ]
    }

    return(
        <div>
            <HighchartsReact highcharts={Highcharts} options={mapOptions} constructorType={"mapChart"}/>
            <div>
                <FormRadio>
                    Mumps
                </FormRadio>
                <FormRadio>
                    Influenza Type A
                </FormRadio>
            </div>
        </div>
    )
}

export default USAStates;