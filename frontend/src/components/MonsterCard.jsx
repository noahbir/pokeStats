function MonsterCard({monster}) {

    return(
        <div className="monster-card">
            <div className="monster-img">
                <img src={monster.url} alt={monster.name} />
            </div>
            <div className="monster-info">
                <h3>{monster.name}</h3>
                <p>{monster.type}</p>
            </div>

        </div>
    )
}

export default MonsterCard;