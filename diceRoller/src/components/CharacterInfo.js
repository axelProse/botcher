import React, {useState} from 'react';

export const useCharacterInfo = () => { 
    const [characterName, setCharacterName] = useState('Axel Prose');
    const [wounds, setWounds] = useState(0);
    const [wildDie, setWildDie] = useState(6);
    const [rank, setRank] = useState('Novice');
    const [experience, setExperience] = useState(0);
    const [bennies, setBennies] = useState(3);
    const [pace, setPace] = useState(6);
    const [toughness, setToughness] = useState(2);
    const [parry, setParry] = useState(2);

    // Not really sure that I want a Character component; seems like it might be part of a larger data object, but whatever for now.  
    // Instead, let's create the components I need right now (SkillList and SkillButton) and import those in App.js.  

    // If I want to create functions that update the character info, I need to return them.  
    // Although he doesn't return the setters; he only returns a setter for the useGameState element.  
    // Which means that if something gets clicked on the character info cell, I might update character info.  
        // I guess?  I need to get a button working that updates state somewhere so I have a better understanding.
        // I can do that with rolling dice; just get a simple roller going.  

    return { characterName, wounds, wildDie, rank, experience, bennies, pace, toughness, parry };
};
