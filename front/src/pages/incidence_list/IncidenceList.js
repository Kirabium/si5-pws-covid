import React, {useState} from "react";

import s from "./IncidenceList.module.scss";
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
    ButtonToolbar,
    Label,
    FormText,
    Button,
    ButtonGroup
} from "reactstrap";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import axios from 'axios';

var DatePicker = require("reactstrap-date-picker");

class IncidenceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            filteredList: null,
            date: null,
            /////////
            day: true,
            week: false,
            dep: true,
            reg: false,
            france: false
        };
    }

    displayElement = (row) => {
        return <tr key={row._id}>
            {this.state.day && <td><span className="text-muted fw-semi-bold">{row.jour} </span></td>}
            {this.state.week && <td><span className="text-muted fw-semi-bold">{row.week} </span></td>}

            {this.state.dep && <td> {row.P}</td>}
            {this.state.dep && <td> {row.cl_age90}</td>}
            {this.state.dep && <td> {row.pop}</td>}
            {this.state.dep && <td> {row.dep}</td>}

            {this.state.reg && <td> {row.P_f}</td>}
            {this.state.reg && <td> {row.P_h}</td>}
            {this.state.reg && <td> {row.P}</td>}
            {this.state.reg && <td> {row.pop_f}</td>}
            {this.state.reg && <td> {row.pop_h}</td>}
            {this.state.reg && <td> {row.cl_age90}</td>}
            {this.state.reg && <td> {row.pop}</td>}
            {this.state.reg && <td> {row.reg}</td>}

            {this.state.france && <td> {row.P_f}</td>}
            {this.state.france && <td> {row.P_h}</td>}
            {this.state.france && <td> {row.P}</td>}
            {this.state.france && <td> {row.pop_f}</td>}
            {this.state.france && <td> {row.pop_h}</td>}
            {this.state.france && <td> {row.cl_age90}</td>}
            {this.state.france && <td> {row.pop}</td>}
        </tr>
    };

    displayChangePage = () => {
        return <Row>
            <Col className={s.prev}>
                {this.state.filteredList &&
                <Button outline color="secondary" onClick={async () => {
                    await this.setState({filteredList: null});
                    this.getPage("http://localhost:2023/incidence/dep/day/1")
                }}>Back</Button>}
                {this.isFirstPage() &&
                <Button outline color="secondary" onClick={() => this.updateUI()}>Go
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
        if(value) {
            let dateVal = new Date(value);
            let day = dateVal.getDate().toString();
            let month = (dateVal.getMonth() + 1).toString();
            let year = dateVal.getFullYear().toString();

            let resString = year + "/" + (month.length == 1 ? "0" + month : month) + "/" + (day.length == 1 ? "0" + day : day);
            console.log(resString);

            let result = await axios.get(this.getCurrentURL() + resString);
            let page = result.data;
            console.log(this.state);
            console.log(this.getCurrentURL() + resString);
            this.setState({date: value, filteredList: page});
        }else{
            await this.setState({filteredList: null, date: null});
            this.updateUI()
        }
    }

    displayFilters = () => {
        return <Col>
            <Row className={s.buttonRow}>
                <Col>
                    <FormGroup>
                        <Label>Looking for a specific date ?</Label>
                        <DatePicker id="example-datepicker"
                                    value={this.state.date}
                                    onChange={(v, f) => this.handleChange(v, f)}/>
                        <FormText>Help</FormText>
                    </FormGroup>
                </Col>
            </Row>
            <Row className={s.buttonRow}>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button outline style={this.state.day ? {backgroundColor: '#ffffff', color: "#000000"}:{backgroundColor: 'transparent', color: "#ffffff"} } onClick={() => {
                            this.setState({day: true, week: false}, () =>
                                this.updateUI()
                            )
                        }}>Daily</Button>
                        <Button outline color="secondary"

                                style={this.state.week ? {backgroundColor: '#ffffff', color: "#000000"}:{backgroundColor: 'transparent', color: "#ffffff"} } onClick={() => {
                            this.setState({day: false, week: true}, () =>
                                this.updateUI()
                            )
                        }}>Weekly</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button outline color="secondary" style={this.state.dep ? {backgroundColor: '#ffffff', color: "#000000"}:{backgroundColor: 'transparent', color: "#ffffff"} }
                                onClick={() => {
                                    this.setState({dep: true, reg: false, france: false}, () =>
                                        this.updateUI()
                                    )
                                }}>Department</Button>
                        <Button outline color="secondary" style={this.state.reg ? {backgroundColor: '#ffffff', color: "#000000"}:{backgroundColor: 'transparent', color: "#ffffff"} }
                                onClick={() => {
                                    this.setState({dep: false, reg: true, france: false}, () =>
                                        this.updateUI()
                                    )
                                }}>Region</Button>
                        <Button outline color="secondary"
                                style={this.state.france ? {backgroundColor: '#ffffff', color: "#000000"}:{backgroundColor: 'transparent', color: "#ffffff"} } onClick={() => {
                            this.setState({dep: false, reg: false, france: true}, () =>
                                this.updateUI()
                            )
                        }}>France</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Row>
        </Col>
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
        console.log(page)
        this.setState({page: page})
    }

    async updateUI() {
        await this.getPage(this.getCurrentURL() + "1")
    }

    getCurrentURL() {
        let uri = "http://localhost:2023/incidence/";
        if (this.state.dep) uri += "dep/"
        if (this.state.reg) uri += "reg/"
        if (this.state.france) uri += "france/"
        if (this.state.day) uri += "day/"
        if (this.state.week) uri += "week/"
        return uri;
    }

    async componentDidMount() {
        let pathURI = "http://localhost:2023/incidence/dep/day/1";
        await this.getPage(pathURI)
    }

    getTHead = () => {
        return <thead>
        <tr className="fs-sm">

            {this.state.day && <th className="hidden-sm-down">Day</th>}
            {this.state.week && <th className="hidden-sm-down">Week</th>}

            {this.state.dep && <th className="hidden-sm-down">Number of cases</th>}
            {this.state.dep && <th className="hidden-sm-down">Age range</th>}
            {this.state.dep && <th className="hidden-sm-down">People in the age range</th>}
            {this.state.dep && <th className="hidden-sm-down">Department</th>}

            {this.state.reg && <th className="hidden-sm-down">Women cases</th>}
            {this.state.reg && <th className="hidden-sm-down">Men cases</th>}
            {this.state.reg && <th className="hidden-sm-down">Number of cases</th>}
            {this.state.reg && <th className="hidden-sm-down">Women in the age range</th>}
            {this.state.reg && <th className="hidden-sm-down">Men in the age range</th>}
            {this.state.reg && <th className="hidden-sm-down">Age range</th>}
            {this.state.reg && <th className="hidden-sm-down">People in the age range</th>}
            {this.state.reg && <th className="hidden-sm-down">Region</th>}

            {this.state.france && <th className="hidden-sm-down">Number of women cases</th>}
            {this.state.france && <th className="hidden-sm-down">Number of men cases</th>}
            {this.state.france && <th className="hidden-sm-down">Number of cases</th>}
            {this.state.france && <th className="hidden-sm-down">Women in the age range</th>}
            {this.state.france && <th className="hidden-sm-down">Men in the age range</th>}
            {this.state.france && <th className="hidden-sm-down">Age range</th>}
            {this.state.france && <th className="hidden-sm-down">People in the age range</th>}

        </tr>
        </thead>
    };


    render() {
        return (
            <div className={s.root}>
                {this.displayFilters()}
                {this.displayChangePage()}
                {this.state.page &&
                <Table striped>
                    {this.getTHead()}
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

export default IncidenceList;
