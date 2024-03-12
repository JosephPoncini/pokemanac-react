import React from 'react'

const StatsComponent = () => {
  return (
    <div className="lg:w-[65%] space-y-4 ^ *">
    <div className="flex flex-row">
        <div className="w-[30%] flex justify-end">Gen:</div>
        <div id="genTxt" className="w-[70%] ml-4">First</div>
    </div>
    <div className="flex flex-row">
        <div className="w-[30%] flex justify-end">Type:</div>
        <div id="typeContainer"
            className="w-[70%] ml-4 flex flex-col items-baseline md:flex-row space-y-4 ^ * md:space-y-0 ^ *">
            <img className="h-[30px]" src=".../assets/elementTypes/electric.png" alt=""/>
        </div>
    </div>
    <div className="flex flex-row">
        <div className="w-[30%] flex justify-end">Location:</div>
        <div id="locationTxt" className="w-[70%] ml-4"> Trophy Garden</div>
    </div>
    <div className="flex flex-row">
        <div className="w-[30%] flex justify-end">Abilities:</div>
        <div id="abilitiesTxt" className="w-[70%] ml-4"> Static, Lightning Rod</div>
    </div>
    <div className="flex flex-col lg:flex-row">
        <div className="w-[30%] flex justify-end mb-4">Moves:</div>
        <div id="movesTxt" className="lg:w-[70%] h-[170px] lg:ml-4 border-2 border-white overflow-y-auto px-2 ">
            Mega
            Punch,
            Pay Day, Thunder Punch, Slam, Double Kick, Mega Kick, Headbutt, Body Slam, Take Down, Double
            Edge, Tail Whip, Growl, Surf, Submission, Counter, Seismic Toss, Strength, Thunder Shock,
            Thunderbolt, Thunder Wave, Thunder, Dig, Toxic, Agility, Quick Attack, Rage, Mimic, Double Team,
            Defense Curl, Light Screen, Reflect, Bide, Swift, Skull Bash, Flash, Rest, Substitute, Thief,
            Snore, Curse, Reversal, Protect, Sweet Kiss, Mud Slap, Zap Cannon, Detect, Endure, Charm,
            Rollout, Swagger, Spark, Attract, Sleep Talk, Return, Frustration, Dynamic Punch, Encore, Iron
            Tail, Hidden Power, Rain Dance, Rock Smash, Uproar, Facade, Focus Punch, Charge, Helping Hand,
            Brick Break, Knock Off, Endeavor, Secret Power, Fake Tears, Signal Beam, Covet, Volt Tackle,
            Calm Mind, Shock Wave, Natural Gift, Feint, Fling, Magnet Rise, Nasty Plot, Discharge,
            Captivate, Grass Knot, Charge Beam, Electro Ball, Round, Echoed Voice, Volt Switch, Electroweb,
            Wild Charge, Disarming Voice, Draining Kiss, Play Rough, Play Nice, Confide, Eerie Impulse,
            Electric Terrain, Nuzzle, Laser Focus, Rising Voltage, Tera Blast, Trailblaze, Alluring Voice,
            Upper Hand</div>
    </div>
</div>
  )
}

export default StatsComponent