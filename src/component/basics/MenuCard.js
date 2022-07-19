import React from 'react'

const MenuCard = ({menuDta}) => {
  // console.log(menuDta);
    const mystyle={
        fontWeight:"bold",
       }
  return (
    <>
     <section className="main-card--cointainer">
    {menuDta.map((curElem) => {
      const{id,name,price,category,description,image} = curElem;
      return(
        <>
<div className="card-container" key={id}>
      <div className="card">
        <div className="card-bpody">
          <span className="card-number card-circle subtitle" style={mystyle}>{id} </span>
          <span className="card-author subtitle" style={{fontWeight:"bold"}}>{category}</span> 
          <h2 className="card-title">{name}</h2>
          <span className="card-description subtle">{description}</span>
          <div className="card-read">Read</div>
        </div>
        <img src={image} alt="images" className="card-media" />
        <div width="100%"><span className="card-tag">Order Now</span></div>
      </div>
    </div>
        </>
      );
    })}
    </section>
    </>
  )
}

export default MenuCard
