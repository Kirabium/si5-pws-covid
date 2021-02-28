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
    FormText
} from "reactstrap";
import Button from "reactstrap/lib/Button";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import axios from 'axios';

var DatePicker = require("reactstrap-date-picker");

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
            filteredList: null,
            date: null
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
                {this.state.filteredList &&
                <Button outline color="secondary" onClick={async () => {
                    await this.setState({filteredList: null});
                    this.getPage("http://localhost:2023/hospitalDay/1")
                }}>Back</Button>}
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

    handleChange(value, formattedValue) {
        this.setState({
            //value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            //formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
            data: formattedValue,
            filteredList: [
                {
                    "_id": "603b51d6f46e4900affe4736",
                    "dep": "01",
                    "sexe": 0,
                    "jour": "2020-03-18",
                    "hosp": 2,
                    "rea": 0,
                    "rad": 1,
                    "dc": 0,
                    "__v": 0
                }]
        })
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
        let pathURI = "http://localhost:2023/hospitalDay/1";
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
                        <th className="hidden-sm-down">Jour</th>
                        <th className="hidden-sm-down">Hospitalisations</th>
                        <th className="hidden-sm-down">Réanimation</th>
                        <th className="hidden-sm-down">Retour à domicile</th>
                        <th className="hidden-sm-down">Département</th>
                        <th className="hidden-sm-down">Décès</th>
                        <th className="hidden-sm-down">Sexe</th>
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
