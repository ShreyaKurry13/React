import React from "react";

class Comp1 extends React.Component{

    constructor(){
        super();
        // console.log(this);
        console.log('constructor');
        

        this.state = {
            name: 'Shreya',
            age: 20,
            place:['Thane','Mumbai']
        }
    }
    myFunc(){
        // alert();
        // this.props.name='person2';
        this.setState({
            name:'Kurry',age:this.state.age+10
        })
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentDidUpdate(){
        console.log('did update');
    }

    componentWillUnmount(){
        console.log('unmount');
    }

    render(){
        return(
            <> 
                <h1>Props & State variables </h1>
                <p>
                    {this.props.name}
                </p>
                <p>
                    {this.props.age}
                </p>
                <button onClick={() => {this.myFunc() }} className="btn btn-dark">Change</button>

                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </>
        )
    }
}

export default Comp1;