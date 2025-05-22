import MonsterCard from "../components/MonsterCard";
import { getMonster } from "../services/api";
import { useState, useEffect } from "react";
import '../css/Home.css'

function Home() { 

    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAllMonsters = async () => {
            try {
                for (let i = 1; i <= 151; i++) {
                    const m = await getMonster(i);
                    setMonsters(prev => [...prev, m]);
                }
            } catch (error) {
                setError("Failed to load Monsters");
                console.log(error);
            }
        }
        loadAllMonsters();
    }, []);

    return (
        <div className="home">
            <h1>Get Stats</h1>
            {monsters.map((m) => (
                <MonsterCard key={m.id} monster={m}/>
            ))}
        </div>
    )
}

export default Home;