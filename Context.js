import { RowsData } from './Rowdata'
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ProductContext = React.createContext()
class ProductProvider extends Component {
    
    
        state = {
            TableData : RowsData,
            id: '',
            employee_name: '',
            employee_salary: '',
            employee_age: '',
            updateEdit: [  ]
        }
    getRecord = (id) =>{
        const product = this.state.TableData.find(item => item.id === id);
        return product
    }
    updateValue = (e,test) => {
        if(test === "employee_name") {
            this.state.employee_name = e.target.value
        }
        if(test === "employee_salary") {
            this.state.employee_salary = e.target.value
        }
        if(test === "employee_age") {
            this.state.employee_age = e.target.value
        }
        const tempData = [this.state.id,this.state.employee_name,this.state.employee_salary,this.state.employee_age]
        this.setState({
            updateEdit: tempData
        })
    }
    onSave = (id) => {
        if(id!==""){
            const savedRecord = this.state.TableData
            const Index = savedRecord.indexOf(this.getRecord(id));
            const Record = savedRecord[Index]
            Record["employee_name"] = this.state.updateEdit[1]
            Record["employee_salary"] = this.state.updateEdit[2]
            Record["employee_age"] = this.state.updateEdit[3]
            this.setState({
                TableData: [...this.state.TableData],
                id:"",employee_name:'',employee_salary:'',employee_age:''
            })
            toast.dark("Details saved successfully!");
        }else{
            const Max = Math.max(...this.state.TableData.map(item => item.id))
            // const Id = Max + 1;
            const newData = {};
            newData["employee_name"] = this.state.updateEdit[1]
            newData["employee_salary"] = this.state.updateEdit[2]
            newData["employee_age"] = this.state.updateEdit[3]
            console.log(newData);
            // await axios.post(`http://dummy.restapiexample.com/api/v1/create`,DDD)
            this.setState({
                TableData: [...this.state.TableData,newData],
                id:'',employee_name:'',employee_salary:'',employee_age:''
            })
            toast.dark("Employee added successfully!");

        }
    }
    onEdit = (id) => {
        console.log(id);
        const Temp = this.state.TableData;
        const Index = Temp.indexOf(this.getRecord(id))
        const SelectedProduct = Temp[Index]
        this.setState({
            id: SelectedProduct["id"],
            employee_name: SelectedProduct["employee_name"],
            employee_salary: SelectedProduct["employee_salary"],
            employee_age: SelectedProduct["employee_age"]
        })
        
    }
    onDelete = (id) => {
        const temp = this.state.TableData.filter(item => item.id !== id);
        this.setState({
            TableData: temp
        })
        toast.success("Employee deleted successfully!");
    }
    render() {
        console.log(this.state.TableData)
        return (
            <div>
                <ProductContext.Provider
                value={{...this.state, 
                    onEdit:this.onEdit,
                    updateValue:this.updateValue,
                    onSave:this.onSave,
                    onDelete:this.onDelete}}
                >
                    {this.props.children}
                </ProductContext.Provider>
                <ToastContainer position="bottom-right" autoClose={2000} />
            </div>
            
        )
    }
}

const ProductConsumer = ProductContext.Consumer ;
export {ProductProvider,ProductConsumer }

