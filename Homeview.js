import React, { Component } from 'react'
import {ProductConsumer}  from './Context'
import {Table,Button,} from 'react-bootstrap'
import axios from 'axios';
import Navigation from './Navigation';

class Homeview extends Component {
    render() {
        
        return (<React.Fragment>
            <Navigation />
            <br></br>
            <br></br>
            <br></br>
            <div class='container'>
                <h3>Employees Data</h3>
                <ProductConsumer >
                    {(value) => {
                        console.log(value)
                        return(
                            <Table class="table-striped" size="sm" varient="dark" >
                                <tbody>
                                    <tr class="table-dark">
                                        <th>Employee Name</th>
                                        <th>Employee Salary</th>
                                        <th>Employee Age</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={value.employee_name} onChange={(e) =>{value.updateValue(e,"employee_name")}}/></td>
                                        <td><input type="text" value={value.employee_salary} onChange={(e) =>{value.updateValue(e,"employee_salary")}}/></td>
                                        <td><input type="text" value={value.employee_age} onChange={(e) =>{value.updateValue(e,"employee_age")}}/></td>
                                        <td><button size="sm" onClick={() => {value.onSave(value.id)}}> {value.id ? "Save" : "Add new row!"}</button></td>
                                    </tr>
                                    {value.TableData.map(item => {
                                        return( 
                                            <tr class="table-secondary">
                                                <td key={item.id}>{item.employee_name}</td>
                                                <td key={item.id}>{item.employee_salary}</td>
                                                <td key={item.id}>{item.employee_age}</td>
                                                <td><button type ="button" size="sm" class="btn btn-primary" onClick={() => {value.onEdit(item.id)}}> Edit</button></td>
                                                <td><button type ="button" size="sm" class="btn btn-danger" onClick={() => {value.onDelete(item.id)}}> Delete </button></td>
                                            </tr> 
                                        )
                                    })}
                                </tbody>
                            </Table>)
                    }}
                </ProductConsumer>
            </div>
        </React.Fragment>
        )
    }
}

export default Homeview
