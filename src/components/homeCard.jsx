import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

function HomeCard(props) {
  return (
    <Card style={{ width:"300px", backgroundColor: props.bgcolor, color: props.color}}>
        <CardBody>
            <CardTitle tag="h3" style={{fontWeight:"bold"}}>
                {props.title}
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            
            >
                <p style={{color:props.color, textDecoration:"underline"}}>Summary</p>
            </CardSubtitle>
            <CardText>
                <p>{props.desc1}: <span style={{fontWeight:"bold"}}>{props.desc1_number}</span></p>
                <p>{props.desc2}: <span style={{fontWeight:"bold"}}>{props.desc2_number}</span></p>
            </CardText>
            <Link to="#" style={{color:props.color}}>View Details</Link>
        </CardBody>
    </Card>
  )
}

export default HomeCard