const getWLStoredBook=()=>{
    const WLStoredBookSTR= localStorage.getItem('wishList');
    if(WLStoredBookSTR){
       return JSON.parse(WLStoredBookSTR);
    }else{
        return [];
    }
}
const addWLStoredBook=(id)=>{
    const WLStoredBookData= getWLStoredBook();
    if (WLStoredBookData.includes(id)){
        alert('already exist')
    }else
    {
        WLStoredBookData.push(id);
        const data= JSON.stringify(WLStoredBookData);
        localStorage.setItem('wishList',data)
    }


}
export {addWLStoredBook}