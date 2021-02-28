import React, {useState} from "react";

import s from "./HospitalList.module.scss";
import {
    Badge,
    Progress,
    Table,
    Row,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Label,
    FormText, ButtonToolbar, ButtonGroup
} from "reactstrap";
import Button from "reactstrap/lib/Button";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import axios from 'axios';

var DatePicker = require("reactstrap-date-picker");

class HospitalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            filteredList: null,
            date: null,
            sexe: 0
        };
    }

    nameSex(sex){
        if(Number(sex)=== 0) return "all";
        if(Number(sex) === 1) return "men";
        if(Number(sex) === 2) return "women";
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
                {this.nameSex(row.sexe)}
            </td>
        </tr>
    };

    displayChangePage = () => {
        return <Row>
            <Col className={s.prev}>
                {this.state.filteredList &&
                <Button outline color="secondary" onClick={async () => {
                    await this.setState({filteredList: null});
                    this.getPage("http://localhost:2023/hospitalDay/1/" + this.state.sexe)
                }}>Back</Button>}
                {this.isFirstPage() &&
                <Button outline color="secondary" onClick={() => this.getPage("http://localhost:2023/hospitalDay/1/" + this.state.sexe)}>Go
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

    async handleChange(value, formattedValue) {
        if (value) {
            let dateVal = new Date(value);
            let day = dateVal.getDate().toString();
            let month = (dateVal.getMonth() + 1).toString();
            let year = dateVal.getFullYear().toString();

            let resString = year + "/" + (month.length == 1 ? "0" + month : month) + "/" + (day.length == 1 ? "0" + day : day);

            let result = await axios.get("http://localhost:2023/hospitalDay/" + resString);
            let page = result.data;
            this.setState({date: value, filteredList: page, sexe: 0});
        } else {
            await this.setState({filteredList: null, date: null});
            this.getPage("http://localhost:2023/hospitalDay/1")
        }
    }

    displayFilters = () => {
        return <Row>
            <Col>
                <FormGroup>
                    <Label>Looking for a specific date ?</Label>
                    <DatePicker id="example-datepicker"
                                value={this.state.date}
                                onChange={(v, f) => this.handleChange(v, f)}/>
                    <FormText>Help</FormText>
                </FormGroup>
                <Row className={s.buttonRow}>
                    <ButtonToolbar style={{marginBottom: 16}}>
                        <ButtonGroup>
                            <Button outline color="secondary" style={this.state.sexe === 0 ? {
                                backgroundColor: '#ffffff',
                                color: "#000000"
                            } : {backgroundColor: 'transparent', color: "#ffffff"}}
                                    onClick={() => {
                                        this.setState({sexe: 0, filteredList: null}, () =>
                                            this.getPage("http://localhost:2023/hospitalDay/1/0")
                                        )
                                    }}>All</Button>
                            <Button outline color="secondary" style={this.state.sexe === 1 ? {
                                backgroundColor: '#ffffff',
                                color: "#000000"
                            } : {backgroundColor: 'transparent', color: "#ffffff"}}
                                    onClick={() => {
                                        this.setState({sexe: 1, filteredList: null}, () =>
                                            this.getPage("http://localhost:2023/hospitalDay/1/1")
                                        )
                                    }}>Men</Button>
                            <Button outline color="secondary"
                                    style={this.state.sexe === 2 ? {
                                        backgroundColor: '#ffffff',
                                        color: "#000000"
                                    } : {backgroundColor: 'transparent', color: "#ffffff"}} onClick={() => {
                                this.setState({sexe: 2, filteredList: null}, () =>
                                    this.getPage("http://localhost:2023/hospitalDay/1/2")
                                )
                            }}>Women</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
            </Col>
        </Row>
    };

    isFirstPage = () => {
        return !this.state.filteredList && this.state.page && this.state.page.prevPage != null;
    };

    isLastPage = () => {
        return !this.state.filteredList && this.state.page && this.state.page.nextPage != null;
    };

    async getPage(uri) {
        let result = await axios.get(uri);
        let page = result.data;
        this.setState({page: page})
    }

    async componentDidMount() {
        let pathURI = "http://localhost:2023/hospitalDay/1/0";
        await this.getPage(pathURI)
    }


    render() {
        return (
            <div className={s.root}>
                {this.displayFilters()}
                {this.displayChangePage()}
                {this.state.page &&
                <Table striped>
                    <thead>
                    <tr className="fs-sm">
                        <th className="hidden-sm-down">Day</th>
                        <th className="hidden-sm-down">Hospitalisations</th>
                        <th className="hidden-sm-down">Reanimation</th>
                        <th className="hidden-sm-down">Back to home</th>
                        <th className="hidden-sm-down">Department</th>
                        <th className="hidden-sm-down">Deaths</th>
                        <th className="hidden-sm-down">Sex</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.filteredList ? this.state.filteredList.map((row) => (
                        this.displayElement(row)
                    )) : this.state.page.content && this.state.page.content.map((row) => (
                        this.displayElement(row)
                    ))}
                    </tbody>
                </Table>
                }
            </div>
        );
    }
}

export default HospitalList;
