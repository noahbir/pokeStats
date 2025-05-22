import MonsterCard from "../components/MonsterCard";

function Home() { 

    return (
        <div className="home">
            <h1>Get Stats</h1>
            <MonsterCard monster={{name: "Noah", type: "normal"}} key="{monster.id}"/>
        </div>
    )
}

export default Home;