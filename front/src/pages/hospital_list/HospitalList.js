import React from "react";

import s from "./HospitalList.module.scss";
import {Badge, Progress, Table} from "reactstrap";

class HospitalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    displayElement = (element) => {
        return <div key={element.id}>
            <h3>{element.jour}</h3>
            <p>{element.dep}</p>
        </div>
    };

    componentDidMount() {
        this.setState({
            list: [
                {
                    "id": 0,
                    "dep": "01",
                    "sexe": 0,
                    "jour": "2020-03-18",
                    "hosp": 2,
                    "rea": 0,
                    "rad": 1,
                    "dc": 0
                },
                {
                    "id": 1,
                    "dep": "01",
                    "sexe": 1,
                    "jour": "2020-03-18",
                    "hosp": 1,
                    "rea": 0,
                    "rad": 1,
                    "dc": 0
                },
                {
                    "id": 2,
                    "dep": "01",
                    "sexe": 2,
                    "jour": "2020-03-18",
                    "hosp": 1,
                    "rea": 0,
                    "rad": 0,
                    "dc": 0
                },
                {
                    "id": 3,
                    "dep": "02",
                    "sexe": 0,
                    "jour": "2020-03-18",
                    "hosp": 41,
                    "rea": 10,
                    "rad": 18,
                    "dc": 11
                },
                {
                    "id": 4,
                    "dep": "02",
                    "sexe": 1,
                    "jour": "2020-03-18",
                    "hosp": 19,
                    "rea": 4,
                    "rad": 11,
                    "dc": 6
                },
                {
                    "id": 5,
                    "dep": "02",
                    "sexe": 2,
                    "jour": "2020-03-18",
                    "hosp": 22,
                    "rea": 6,
                    "rad": 7,
                    "dc": 5
                },
                {
                    "id": 6,
                    "dep": "03",
                    "sexe": 0,
                    "jour": "2020-03-18",
                    "hosp": 4,
                    "rea": 0,
                    "rad": 1,
                    "dc": 0
                },
                {
                    "id": 7,
                    "dep": "03",
                    "sexe": 1,
                    "jour": "2020-03-18",
                    "hosp": 1,
                    "rea": 0,
                    "rad": 0,
                    "dc": 0
                },
                {
                    "id": 8,
                    "dep": "03",
                    "sexe": 2,
                    "jour": "2020-03-18",
                    "hosp": 3,
                    "rea": 0,
                    "rad": 1,
                    "dc": 0
                }
            ]
        });
    }


    render() {
        return (
            <div className={s.root}>
                <Table striped>
                    <thead>
                    <tr className="fs-sm">
                        <th className="hidden-sm-down">Jour</th>
                        <th className="hidden-sm-down">hosp</th>
                        <th className="hidden-sm-down">rea</th>
                        <th className="hidden-sm-down">rad</th>
                        <th className="hidden-sm-down">dep</th>
                        <th className="hidden-sm-down">dc</th>
                        <th className="hidden-sm-down">Sexe</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((row) => (
                        <tr key={row.id}>
                            <td>
                                <span className="text-muted fw-semi-bold">
                               {row.jour}
                            </span>
                            </td>
                            <td>
                                {row.hosp}
                            </td>
                            <td>
                                {row.rea}
                            </td>
                            <td>
                                {row.rad}
                            </td>
                            <td>
                                {row.dep}
                            </td>
                            <td>
                                {row.dc}
                            </td>
                            <td>
                                {row.sexe}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default HospitalList;
