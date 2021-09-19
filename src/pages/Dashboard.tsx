/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper';
import* as c3 from 'c3';
import axios from 'axios';
const Dashboard=()=>  {
    
    useEffect(()=>{
        var chart = c3.generate({
            bindto: '#chart',
            data: {
              columns: [
               
                ['data2', 50, 20, 10, 40, 15, 25]
              ],
              axes: {
                data2: 'y2'
              },
              types: {
                data2: 'bar' // ADD
              }
            },
            axis: {
              y: {
                label: {
                  text: 'Y Label',
                  position: 'outer-middle'
                }
              },
              y2: {
                show: true,
                label: {
                  text: 'Y2 Label',
                  position: 'outer-middle'
                }
              }
            }
        });
    },[]);
   
        return (
            <Wrapper>
                <h2>Daily Sales</h2>
                <div id="chart"></div>
            </Wrapper>
        )
    
}
export default Dashboard;
