import React from 'react';
import {Link} from 'react-router-dom'

const ServiceCard = (props) => {
  return (
    <div class="service-item">
      <Link to={`${props.type}/${props.item.id}`}  id={props.item.id} index={props.index} className='place-img' >
        <img src={props.item.image} alt={props.item.name} />
        <div class="content">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <div class="ratings">
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard;