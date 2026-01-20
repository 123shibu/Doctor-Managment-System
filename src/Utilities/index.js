export const getStorage = () => {
    const get = localStorage.getItem('Set');
    if (get) {
        return JSON.parse(get);  
    } else {
        return [];  
    }
}

export const setStorage = (take) => {
    const setData = getStorage();  
    
    const isExist = setData.find(u => u.id === take.id);
    if (isExist) {
        return alert('This item already exists'); 
    }

    setData.push(take);  

    const convertData = JSON.stringify(setData);  
    localStorage.setItem('Set', convertData); 
}


export const removeItems = id => {
    const setData = getStorage();  

    const remain = setData.filter(a => a.id !== id); 
    
    const convertData = JSON.stringify(remain); 
    localStorage.setItem('Set', convertData); 
}
