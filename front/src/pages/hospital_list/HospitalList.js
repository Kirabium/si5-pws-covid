import React, {useState} from "react";

import s from "./HospitalList.module.scss";
import {Badge, Progress, Table, Row, Col, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import Button from "reactstrap/lib/Button";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import axios from 'axios';

const DropDownButtonDepartment = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Pick your department
            </DropdownToggle>
            <DropdownMenu>
                {Array.from({length: 99}, (_, i) => i + 1).map((value) => <DropdownItem>{value}</DropdownItem>)}
            </DropdownMenu>
        </ButtonDropdown>
    );
};

class HospitalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
        };
    }

    displayElement = (row) => {
        return <tr key={row._id}>
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
    };

    displayChangePage = () => {
        return <Row>
            <Col className={s.prev}>
                {this.isFirstPage() &&
                <Button outline color="secondary" onClick={() => this.getPage("http://localhost:2023/hospitalDay/1")}>Go
                    to first page</Button>}
                {this.isFirstPage() &&
                <Button outline color="secondary"
                        onClick={() => this.getPage(this.state.page.prevPage)}>previous</Button>}
            </Col>
            <Col className={s.next}>
                {this.isLastPage() &&
                <Button outline color="secondary" onClick={() => this.getPage(this.state.page.nextPage)}>next</Button>}
            </Col>
        </Row>
    };

    displayFilters = () => {
        return <Row>
            {DropDownButtonDepartment}
        </Row>
    };

    isFirstPage = () => {
        return this.state.page && this.state.page.prevPage != null;
    };

    isLastPage = () => {
        return this.state.page && this.state.page.nextPage != null;
    };

    async getPage(uri) {
        let result = await axios.get(uri);
        let page = result.data;
        this.setState({page: page})
    }

    async componentDidMount() {
        let pathURI = "http://localhost:2023/hospitalDay/1";
        await this.getPage(pathURI)
    }


    render() {
        return (
            <div className={s.root}>
                {this.displayFilters()}
                {this.displayChangePage()}
                {this.state.page ?
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
                        {this.state.page.content && this.state.page.content.map((row) => (
                            this.displayElement(row)
                        ))}
                        </tbody>
                    </Table>
                    :
                    <Progress/>
                }
            </div>
        );
    }
}

export default HospitalList;
