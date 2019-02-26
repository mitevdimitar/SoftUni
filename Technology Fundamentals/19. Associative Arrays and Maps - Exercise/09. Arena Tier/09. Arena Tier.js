function arenaTier(arr) {
    //part 1 - map creating
    arr.pop();
    let gladiators = new Map();

    for (let arrRow of arr) {
        let tokens = arrRow.split(' -> ');
        
        
        if (tokens.length === 3) {
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = +tokens[2];
        
            if (gladiators.has(gladiator)) {
                let currentTechnicues = gladiators.get(gladiator);
                if (currentTechnicues.has(technique)) {
                    let currentSkill = currentTechnicues.get(technique);
                    if (skill < currentSkill) {
                        skill = currentSkill;
                    }
                }    
                currentTechnicues.set(technique, skill);
            } else {
                let techniques = new Map();
                techniques.set(technique, skill);
                gladiators.set(gladiator, techniques);
            }
        } else {
            //part 2 - battle
            let [gladiator1, gladiator2] = tokens[0].split(' vs ');
            if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {
                battle(gladiator1, gladiator2);
            }
        }
    }
    function battle(glad1, glad2) {
        let mapGlad1 = gladiators.get(glad1);
        let mapGlad2 = gladiators.get(glad2);
        let skillsGlad1 = [...mapGlad1]
            .map(skill => skill[0]);
        let skillsGlad2 = [...mapGlad2]
            .map(skill => skill[0]);
        let common = skillsGlad1.filter(a => skillsGlad2.includes(a));
        
        if (common.length > 0) {
            let totalSkillsGlad1 = 0;
            let totalSkillsGlad2 = 0;
            for (let commonSkills of common) {
                totalSkillsGlad1 += Number(mapGlad1.get(commonSkills));
                totalSkillsGlad2 += Number(mapGlad2.get(commonSkills));
            }
            if (totalSkillsGlad1 > totalSkillsGlad2) {
                gladiators.delete(glad2);
            } else if (totalSkillsGlad2 > totalSkillsGlad1) {
                gladiators.delete(glad1);
            }
        }
        
    }
    
    //part 3 - sorting
    function compareGladiators(a, b) {
        let aName = a[0];
        let bName = b[1];
        let aTechniques = a[1];
        let bTechniques = b[1];
        let aTotalSkill = [...aTechniques]
            .map(e => e[1])
            .reduce((c, d) => c + d, 0);
        let bTotalSkill = [...bTechniques]
            .map(e => e[1])
            .reduce((c, d) => c + d, 0);

        let firstCriteria = bTotalSkill - aTotalSkill;

        if (firstCriteria === 0) {
            return aName.localeCompare(bName);
        }
        return firstCriteria;
    }

    function compareTechniques(a, b) {
        let firstCriteria = b[1] - a[1];

        if (firstCriteria === 0) {
            return a[0].localeCompare(b[0]);
        }

        return firstCriteria;
    }

    let sorted = [...gladiators]
        .sort(compareGladiators);

    for (let [gladiator, techniquesMap] of sorted) {
        let totalSkill = [...techniquesMap]
        .map(e => e[1])
        .reduce((c, d) => c + d, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);
        let sortedTechniques = [...techniquesMap]
            .sort(compareTechniques);
            for (let [technique, skill] of sortedTechniques) {
                console.log(`- ${technique} <!> ${skill}`)
            }
            
    }
    
}
