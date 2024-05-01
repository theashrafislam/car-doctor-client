const ServiceCard = ({service}) => {
    const {title, price, img} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[210px]" />
            </figure>
            <div className="card-body px-12">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;