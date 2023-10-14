import React,{Component} from "react";
import "./task2.css"
import "./bootstrap.css"
import { FaBackspace, FaEquals, FaMinus, FaPlus, FaTimes, FaDivide, FaCalculator} from "react-icons/fa";
class Task2 extends Component{
    constructor(props)
    {
        super(props)
        this.state ={
            InputNo1: '',InputArray: [],entireValue: ''
        }
    }
    InputFunction = (params) => {
        let InputNo1T=this.state.InputNo1,InputNo2T=this.state.InputArray,entireValueT=this.state.entireValue;
        if (params*1>=0 &&  params*1<=9){
            InputNo1T+=params;
            entireValueT+=params
        }
        else{
            if (params=='='){
                InputNo2T.push(InputNo1T);
                InputNo1T='';
                let Temp=[InputNo2T[0]];
                for (let i=1;i<InputNo2T.length;i++)
                    Temp.push((InputNo2T[i]=='x' && i<InputNo2T.length-1)?((Temp.pop()*1)*(InputNo2T[++i]*1)+''):InputNo2T[i]);
                InputNo2T=Temp;
                Temp=[InputNo2T[0]];
                for (let i=1;i<InputNo2T.length;i++)
                    Temp.push((InputNo2T[i]=='/' && i<InputNo2T.length-1)?((Temp.pop()*1)/(InputNo2T[++i]*1)+''):InputNo2T[i]);
                InputNo2T=Temp;
                Temp=[InputNo2T[0]];
                for (let i=1;i<InputNo2T.length;i++)
                    Temp.push((InputNo2T[i]=='+' && i<InputNo2T.length-1)?((Temp.pop()*1)+(InputNo2T[++i]*1)+''):InputNo2T[i]);
                InputNo2T=Temp;
                Temp=[InputNo2T[0]];
                for (let i=1;i<InputNo2T.length;i++)
                    Temp.push((InputNo2T[i]=='-' && i<InputNo2T.length-1)?((Temp.pop()*1)-(InputNo2T[++i]*1)+''):InputNo2T[i]);   
                InputNo2T=[];
                entireValueT=Temp[0];
                InputNo1T=Temp[0];
            }
            else if(params=='b'){
                if (entireValueT.length!=0) entireValueT=entireValueT.slice(0,-1);
                if (InputNo1T.length!=0){
                    InputNo1T=InputNo1T.slice(0,-1);
                }
                else if (InputNo2T.length!=0){
                    let temp=InputNo2T.pop().slice(0,-1);
                    if (temp.length!=0){
                        InputNo2T.push(temp);
                    }
                } 
            }
            else {
                if (params=='.') 
                {
                    entireValueT+=params
                    InputNo1T+=params
                }
                else{
                    entireValueT+=params
                    if (InputNo1T!='') InputNo2T.push(InputNo1T);
                    InputNo2T.push(params);
                    InputNo1T=''
                }
            }
        }
        this.setState({
            InputNo1: InputNo1T,
            InputArray: [...InputNo2T],
            entireValue: entireValueT
        })
    }
    render(){
        return (
            <div className="background-gradient">
                <div className="container pt-5">
                    <div className="row ">
                        <div className="offset-5 col-md-2 col-sm-4 shadow outline-dark rounded-top-5 calc-display pb-5-1">
                            <div className="row">
                                <div className="col-12 text-start pb-4 pt-2 ps-3">
                                    <FaCalculator/>
                                </div>
                                <div className="col-12 mt-2 text-end fs-3" id="ExpressionInput">
                                    <span className="p-4">{this.state.entireValue}</span>
                                </div>
                            </div>
                        </div>
                        <div className="offset-5 col-md-2 col-sm-4 shadow outline-dark rounded-bottom-5 calc-body pt-3">
                            <div className="row">
                                <div className="col-md-8 col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(7)}>7</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(8)}>8</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(9)}>9</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(4)}>4</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(5)}>5</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(6)}>6</button>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(1)}>1</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(2)}>2</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(3)}>3</button>
                                        </div>
                                    </div>
                                    <div className="row pb-3">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction(0)}>0</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn text-white fs-4" onClick={() =>this.InputFunction('.')}>.</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                                <button className="btn text-white fs-4" onClick={() =>this.InputFunction('=')}>
                                                    <FaEquals/>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-3">
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn text-white fs-4 mr-4" onClick={() =>this.InputFunction('b')}>
                                            <FaBackspace/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn text-white fs-4" onClick={() =>this.InputFunction('/')}>
                                            <FaDivide/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn text-white fs-4" onClick={() =>this.InputFunction('x')}>
                                            <FaTimes/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn text-white fs-4" onClick={() =>this.InputFunction('+')}>
                                            <FaPlus/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn text-white fs-4" onClick={() =>this.InputFunction('-')}>
                                            <FaMinus/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task2
