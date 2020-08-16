import React from 'react'
import { Statistic, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

function PokeStat({
    statistics
}) {

    return (
        <div>
            <Row gutter={16}>
                {
                    statistics.map(statObj => (
                        <Col key={statObj.stat.name} span={12}>
                            <Statistic title={statObj.stat.name} value={statObj.base_stat} />
                        </Col>
                        ))
                }
            </Row>
        </div>
    )
}

export default PokeStat
