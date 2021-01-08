

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Card, Button} from "react-bootstrap";
const queryString = require('query-string');
const Task = props => (
<>
<Card style={{textAlign: "center",}}>
  <Card.Header>{props.task.material}</Card.Header>
  <Card.Body>
    <Card.Title style={{fontSize:"40px", fontFamily:"cursive",marginLeft:"320px", width:"650px", boxShadow: "5px 10px 10px #888888 "}} >{props.task.title}</Card.Title>
    <iframe title="myFrame" src= {props.task.video}width='600' height='400' className="w3-round" alt="TheLessonVedio" style={{boxShadow: "5px 10px 10px #888888 "}} />
    <Card.Text style={{fontSize:"25px", fontFamily:"cursive", width:"650px",marginLeft:"320px", 
   boxShadow: "5px 10px 10px #888888 "
  }} >
    {props.task.description}
    </Card.Text>
  </Card.Body>
</Card>

 
{localStorage.getItem("role")==="teacher"? <Button style={{background:"orange" ,marginLeft: "600px"}}><Link to={"/EditMatreals/"+props.task._id}>edit</Link></Button>:null}
{localStorage.getItem("role")==="teacher"? <Button  style={{background:"orange" ,marginLeft: "0px"}}><a href="/account/:id"  onClick={() => { props.deleteTask(props.task._id) }}>delete</a></Button> :null}

</>





 
) 
export default class calender extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
      tasks: [],
      role:localStorage.getItem("role"),
      courseId: queryString.parse(this.props.location.search),
    
     };
  }
  componentDidMount() {
    console.log('course id ',this.state.courseId)
    const courseId = queryString.parse(this.props.location.search) ;
    
    console.log(courseId);
    axios.get('http://localhost:8000/materials/lessons/'+courseId.id)
      .then(response => {
        this.setState({
          tasks: response.data,
          
        })
        console.log('this is my data', response.data)
        })
      .catch((error) => {
         console.log(error);
        })
  }

  deleteTask(id) {
    axios.delete('http://localhost:8000/materials/'+id)
      .then(response => { console.log(response.data)});

      //use filter to render elements except the deleted item 
    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }
  //use this function to render every added task 
  taskList() {
    return this.state.tasks.map(currenttask => {
      console.log(currenttask._id)
      return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>
    })
  }
 
  render() {
    return (
      <div
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      
      > 
        <div>
       
        { this.taskList() }

        </div>

        <div className = "note-app">
    </div>
    </div>
  )
};
}



