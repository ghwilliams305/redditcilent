const convertor = (convertionTable, rawNum) => {
    let num = rawNum;

    convertionTable.forEach(converter => {
        if(typeof num === 'number'){
            if((num / converter[0]) > 1) {
                num /= converter[0];
            } else {
                num = `${Math.round(num)} ${converter[1]}`;
            }
        }
    });

    return num;
}

const convertTime = (time) => {
    let timeDiff = Date.now() - time;
        
    const convertions = [
        [1000, 'ms'], 
        [60, 's'], 
        [60, 'mins'], 
        [24, 'hr'], 
        [7, 'days'], 
        [4, 'weeks'], 
        [12, 'months'], 
        [10, 'years']
    ];

    return convertor(convertions, timeDiff);
}

const convertNum = (number) => {
    const convertions = [
        [(10 ** 3), ''], 
        [(10 ** 6), 'K'], 
        [(10 ** 9), 'M'], 
        [(10 ** 12), 'B']
    ];

    return convertor(convertions, number);
}

async function getJSONObject(link) {
    try {
        const response = await fetch(link);
        const responseObj = await response.json();
    
        return responseObj.data.children.map(child => child.data);
    } catch(e) {
        return e;
    }
}