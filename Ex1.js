const getCurrentDate = key => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    if (mm < 10) mm = '0' + mm;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    const result =  dd + key + mm + key + yyyy;
    console.log(result);
}

getCurrentDate('.')