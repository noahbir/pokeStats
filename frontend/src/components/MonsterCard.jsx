function MonsterCard({monster}) {

    return(
        <div className="monster-card">
            <div className="monster-img">
                <img src={monster.sprites.front_default} alt={monster.name} />
            </div>
            <div className="monster-info">
                <h3>{monster.name}</h3>
                <p>{monster.types[0].type.name}</p>
            </div>

        </div>
    )
}

export default MonsterCard;