import './InfoCard.css'

export default function InfoCard({picture, carType, title, text}) {
    return (
        <div className={carType}>
            <img className="image" src={picture} alt="type of vehicle rental" />
            <h2 className="title">{title}</h2>
            <p className="text">{text}</p>
            <button className="button">Learn More</button>
        </div>
    )
}
