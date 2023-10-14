import React,{Component} from "react";
import "./task2.css"
import "./bootstrap.css"
import { FaBackspace, FaEquals, FaMinus, FaPlus, FaTimes, FaDivide, FaCalculator} from "react-icons/fa";
class Task2 extends Component{
    constructor(props)
    {
        super(props)
        this.state ={
            InputNo1: '',InputNo2: '',InputChar:'',previous: ''
        }
    }
    InputFunction = (params) => {
        let InputNo1T=this.state.InputNo1,InputNo2T=this.state.InputNo2,InputCharT=this.state.InputChar;
        if (params!='=') 
        {
            let temp=document.getElementById('ExpressionInput');
            if (params=='b') {
                if (InputNo1T=='Infinity' || InputNo1T.length>10)
                {
                    document.getElementById('ExpressionInput').innerHTML='';
                    InputNo1T='';
                }
                else {
                    let content=temp.innerHTML;
                    content=content.substring(0,content.length-1);
                    temp.innerHTML=content;
                    if (InputNo2T!='') InputNo2T=InputNo2T.substring(0,InputNo2T.length-1);
                    else if (InputCharT!='') InputCharT='';
                    else if (InputNo1T!='') InputNo1T=InputNo1T.substring(0,InputNo1T.length-1);
                }
            }
            else if (!(this.state.previous*1>=0 && this.state.previous*1<=9) && !(params*1>=0 && params*1<=9) && InputCharT!='') {
                alert("Invalid Expression!!");
                return; 
            }
            else temp.innerHTML+=params;
        }
        if (InputCharT=='')
        {
            if (params*1>=0 && params*1<=9) InputNo1T+=params;
            else if (params!='b')
            {
                if (params=='.') InputNo1T+=params;
                else InputCharT=params;
            }
        }
        else {  
            if (params*1>=0 && params*1<=9) InputNo2T+=params;
            else
            {
                if (params!='b') {
                    if (params=='.')
                    {
                        InputNo2T+=params;
                        return;
                    }
                    let result=InputNo1T*1;
                    if (InputCharT=='-') result-=(InputNo2T*1);
                    else if (InputCharT=='+') result+=(InputNo2T*1);
                    else if (InputCharT=='x') result*=(InputNo2T*1);
                    else if (InputCharT=='/') result/=(InputNo2T*1);
                    InputNo1T=result+'';
                    InputNo2T='';
                    // InputCharT=''
                    if (params=='=') document.getElementById('ExpressionInput').innerHTML=InputNo1T;
                }
            }
        }
        console.log("A1: ",InputNo1T);
        console.log("B1: ",InputNo2T);
        console.log("C1: ",InputCharT);
        this.setState({
            InputNo2: InputNo2T,
            InputNo1: InputNo1T,
            InputChar: InputCharT,
            previous: params
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
                                    <span className="p-4"></span>
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
// Edo error vastundi = kottaka