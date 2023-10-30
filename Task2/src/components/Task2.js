import React,{Component,useEffect,useState} from "react";
import "./task2.css";
import "./bootstrap.css";
import { FaBackspace, FaEquals, FaMinus, FaPlus, FaTimes, FaDivide, FaCalculator} from "react-icons/fa";
const Task2 = () => {
    const [InputNo1,CInputNo1]=useState('')
    const [InputArray,CInputArray]=useState([])
    const [entireValue,CentireValue]=useState('')
    const [toggle,SetToggle]=useState(true)
    const ThemeChanger=()=>{
        let a=document.getElementsByClassName('btn')
        if (toggle){
            for (let i=0;i<17;i++) a[i].style.color='black';
            document.getElementById('switch').checked=true
            document.getElementById('calc-display').style.backgroundColor='#F7F7F7';
            document.getElementById('calc-display').style.color='black';
            document.getElementById('calc-body').style.backgroundColor='#FFFAFA';
            document.getElementById('image').alt='light'
            document.getElementById('image').src='https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-cute-cute-little-sun-png-image_4628469.jpg';
        }
        else{
            for (let i=0;i<17;i++) a[i].style.color='white';
            document.getElementById('switch').checked=false
            document.getElementById('calc-display').style.backgroundColor='#172d67';
            document.getElementById('calc-display').style.color='white';
            document.getElementById('calc-body').style.backgroundColor='#070b26';
            document.getElementById('image').alt='dark'
            document.getElementById('image').src='https://img.freepik.com/premium-vector/cute-moon-cartoon-vector-illustration-with-space-background_401949-4.jpg?w=740';
        }
        SetToggle(!toggle);
    }
    const InputFunction = (params) => {
        let InputArrayT=[...InputArray];
        if (params*1>=0 &&  params*1<=9){
            CInputNo1(InputNo1T=>InputNo1T+params);
            CentireValue(entireValue=>entireValue+params);
        }
        else{
            if (params=='='){
                InputArrayT.push(InputNo1);
                let Temp=[InputArrayT[0]];
                for (let i=1;i<InputArrayT.length;i++)
                Temp.push((InputArrayT[i]=='x' && i<InputArrayT.length-1)?((Temp.pop()*1)*(InputArrayT[++i]*1)+''):InputArrayT[i]);
                InputArrayT=[...Temp];
                Temp=[InputArrayT[0]];
                for (let i=1;i<InputArrayT.length;i++)
                Temp.push((InputArrayT[i]=='/' && i<InputArrayT.length-1)?((Temp.pop()*1)/(InputArrayT[++i]*1)+''):InputArrayT[i]);
                InputArrayT=[...Temp];
                Temp=[InputArrayT[0]];
                for (let i=1;i<InputArrayT.length;i++)
                Temp.push((InputArrayT[i]=='+' && i<InputArrayT.length-1)?((Temp.pop()*1)+(InputArrayT[++i]*1)+''):InputArrayT[i]);
                InputArrayT=[...Temp];
                Temp=[InputArrayT[0]];
                for (let i=1;i<InputArrayT.length;i++)
                Temp.push((InputArrayT[i]=='-' && i<InputArrayT.length-1)?((Temp.pop()*1)-(InputArrayT[++i]*1)+''):InputArrayT[i]);   
                InputArrayT=[]
                CentireValue(Number(Temp[0]).toFixed(3));
                CInputNo1(Temp[0]);
            }
            else if(params=='b'){
                if (entireValue.length!=0) CentireValue(entireValue=>entireValue.slice(0,-1));
                if (InputNo1.length!=0) CInputNo1(InputNo1=>InputNo1.slice(0,-1));
                else if (InputArrayT.length!=0){
                    let temp=[...InputArrayT];
                    temp=temp.pop();
                    InputArrayT=[...temp];
                    temp=temp.slice(0,-1)
                } 
            }
            else {
                let InputNo1T=InputNo1;
                if (params=='.') 
                {
                    CInputNo1(InputNo1T=>InputNo1T+params);
                    CentireValue(entireValue=>entireValue+params);        
                }
                else{
                    CentireValue(entireValue=>entireValue+params);
                    if (InputNo1T!='') InputArrayT.push(InputNo1T);
                    InputArrayT.push(params);
                    CInputNo1('');
                }
            }
        }
        CInputArray(InputArray=>[...InputArrayT]);
    }
    const keyDownHandler = event => {
        const values = document.querySelectorAll(".btn")
        if (event.key*1>=0 && event.key*1<=9 || event.key=='.') for(let i =0;i<values.length;i++)
        {
            if(values[i].textContent==event.key) values[i].click();
        } 
        else if (event.key=='+') values[15].click();
        else if (event.key=='-') values[16].click();
        else if (event.key=='*') values[14].click();
        else if (event.key=='/') values[13].click();
        else if (event.key=='='  || event.key=="Enter") values[11].click();
        else if (event.key=="Backspace") values[12].click();
    };
    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
    },[]);
        return (
            <div className="background-gradient">
                <div className="container pt-5">
                    <div className="row">
                        <div className="offset-5 col-md-2 col-sm-4 shadow outline-dark rounded-top-5 pb-5-1" id="calc-display" style={{backgroundColor: '#172d67',color: 'white'}}>
                            <div className="row">
                                <div className="col-12 text-start pb-4 pt-2 ps-3">
                                <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" onClick={ThemeChanger} id="switch"/>
                                <img src="https://img.freepik.com/premium-vector/cute-moon-cartoon-vector-illustration-with-space-background_401949-4.jpg?w=740" alt="dark" width={'25px'} id="image" onClick={ThemeChanger}/>
                                </div>
                                </div>
                                <div className="col-12 mt-2 text-end fs-3 overflow-auto" id="ExpressionInput">
                                    <span className="p-4">{entireValue} </span>
                                </div>
                            </div>
                        </div>
                        <div className="offset-5 col-md-2 col-sm-4 shadow outline-dark rounded-bottom-5 pt-3" id="calc-body" style={{backgroundColor:' #070b26',color: 'white'}}>
                            <div className="row">
                                <div className="col-md-8 col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(7)}>7</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(8)}>8</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(9)}>9</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(4)}>4</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(5)}>5</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(6)}>6</button>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(1)}>1</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(2)}>2</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(3)}>3</button>
                                        </div>
                                    </div>
                                    <div className="row pb-3">
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction(0)}>0</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                            <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('.')}>.</button>
                                        </div>
                                        <div className="col-sm-3 col-md-4 padding-number">
                                                <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('=')}>
                                                    <FaEquals/>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-3">
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn fs-4 mr-4"  style={{color:'white'}} onClick={() => InputFunction('b')}>
                                            <FaBackspace/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('/')}>
                                            <FaDivide/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('x')}>
                                            <FaTimes/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('+')}>
                                            <FaPlus/>
                                        </button>
                                    </div>
                                    <div className="col-sm-11 col-md-12">
                                        <button className="btn fs-4"  style={{color:'white'}} onClick={() => InputFunction('-')}>
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

export default Task2
