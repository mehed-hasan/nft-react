function CounterCard({data}) {
    return ( 
      <div className="counter-item  mb-4 mb-lg-0">
      <h3>{data.amount}k+</h3>
      <p>{data.type}</p>
    </div>
     );
}

export default CounterCard;