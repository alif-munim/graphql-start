import React from 'react'
import { Statistic, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

function PokeStat({
    statistics
}) {

    console.log(statistics);

    return (
        <div>
            <Row gutter={16}>
                {
                    statistics.map(statObj => (
                        // <li key={statObj.stat.name} className="list-group-item">{statObj.stat.name}: {statObj.base_stat}</li>
                        <Col span={12}>
                            <Statistic title={statObj.stat.name} value={statObj.base_stat} />
                        </Col>
                        ))
                }
            </Row>
        </div>
    )
}

export default PokeStat
