import React,{useState} from 'react'
import Banner from './Banner';
export default function Card(props){


    //USING STATES FOR EACH AND EVERY CARD 
    
    const [show0,setShow0]=useState(true);
    const [show1,setShow1]=useState(true);
    const [show2,setShow2]=useState(true);
    const [show3,setShow3]=useState(true);
    const [show4,setShow4]=useState(true);
    const [show5,setShow5]=useState(true);
    const [show6,setShow6]=useState(true);
    const [show7,setShow7]=useState(true);
    
   //FUNCTIONS TO ADD AND SUB FOR EACH AND EVERY CARD FOR INCREASING AND DECREASING IN CART
    function add0(){
        props.setState((props.state)+1);
        setShow0(!show0);
    }
    function sub0(){
        props.setState((props.state)-1);
        setShow0(!show0);
    }

    function add1(){
        props.setState((props.state)+1);
        setShow1(!show1);
    }
    function sub1(){
        props.setState((props.state)-1);
        setShow1(!show1);
    }

    function add2(){
        props.setState((props.state)+1);
        setShow2(!show2);
    }
    function sub2(){
        props.setState((props.state)-1);
        setShow2(!show2);
    }

    function add3(){
        props.setState((props.state)+1);
        setShow3(!show3);
    }
    function sub3(){
        props.setState((props.state)-1);
        setShow3(!show3);
    }

    function add4(){
        props.setState((props.state)+1);
        setShow4(!show4);
    }
    function sub4(){
        props.setState((props.state)-1);
        setShow4(!show4);
    }

    function add5(){
        props.setState((props.state)+1);
        setShow5(!show5);
    }
    function sub5(){
        props.setState((props.state)-1);
        setShow5(!show5);
    }

    function add6(){
        props.setState((props.state)+1);
        setShow6(!show6);
    }
    function sub6(){
        props.setState((props.state)-1);
        setShow6(!show6);
    }

    function add7(){
        props.setState((props.state)+1);
        setShow7(!show7);
    }
    function sub7(){
        props.setState((props.state)-1);
        setShow7(!show7);
    }

   



    return(
         //CARD CONTENT FOR EACH AND EVERY CARD
         //SETTING ONCLICK FUNCTION FOR EVERY CARD
        <div className="cardSection">
           <Banner/>
           <div className="cardContainer">
            <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA I</h5>
            <p className="card-text">400 Rs</p>
            {
                show0===true?<a href="#" className="btn btn-outline-dark" onClick={add0}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub0}>Remove from Cart</a>
            }
            
            </div>
            </div>

            <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/GTASABOX.jpg/220px-GTASABOX.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA II</h5>
            <p className="card-text">500 Rs</p>
            {
                show1===true?<a href="#" className="btn btn-outline-dark" onClick={add1}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub1}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/51RcProTM7L._AC_UF1000,1000_QL80_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA III</h5>
            <p className="card-text">300 Rs</p>
            {
                show2===true?<a href="#" className="btn btn-outline-dark" onClick={add2}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub2}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://assets-prd.ignimgs.com/2022/01/07/gta-4-button-composite-1641587487703.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA IV</h5>
            <p className="card-text">300 Rs</p>
            {
                show3===true?<a href="#" className="btn btn-outline-dark" onClick={add3}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub3}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA V</h5>
            <p className="card-text">1500 Rs</p>
            {
                show4===true?<a href="#" className="btn btn-outline-dark" onClick={add4}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub4}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://www.hindustantimes.com/ht-img/img/2023/11/06/550x309/meme-1-5_1680835922484_1699241160882.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA VI</h5>
            <p className="card-text">2500 Rs</p>
            {
                show5===true?<a href="#" className="btn btn-outline-dark" onClick={add5}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub5}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://i.ytimg.com/vi/95N6mwkE048/maxresdefault.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA VII</h5>
            <p className="card-text">3000 Rs</p>
            {
                show6===true?<a href="#" className="btn btn-outline-dark" onClick={add6}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub6}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://i.ytimg.com/vi/w6_0HdEjlsA/maxresdefault.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">GTA VIII</h5>
            <p className="card-text">5000 Rs</p>
            {
                show7===true?<a href="#" className="btn btn-outline-dark" onClick={add7}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub7}>Remove from Cart</a>
            }
            </div>
            </div>
            </div>
        </div>
    )
}