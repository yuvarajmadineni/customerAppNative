let DATA = [
    {id:'1', "desc":"Vill Jane will astonish every guest with its breathtaking views", "price":"$200", "total":"$1200","place":"Aspen", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/001_villa.jpg"},
    {id:'2', "desc":"An ultra exclusive mountain home Ranch-inspired luxury living", "price":"$350", "total":"$2100","place":"Aspen", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/002_villa.jpg"},
    {id:'3', "desc":"An ultra exclusive mountain home Ranch-inspired luxury living", "price":"$400", "total":"$2400","place":"Aspen", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/003_villa.jpg"},
    {id:'4', "desc":"An ultra exclusive mountain home Ranch-inspired luxury living", "price":"$400", "total":"$2400","place":"Alaska", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/003_villa.jpg"}

];


export var getLocations = ()=>{
    return DATA;
}

export var getLocationById = (id) =>{
    var list = DATA.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var getLocationByPlace = (plc) =>{
    var list = DATA.filter((item)=>(item.place==plc));
    if(list.length > 0){
        console.log("lst rey",list);
        return list;
        
    }else{
        return {}
   }
}