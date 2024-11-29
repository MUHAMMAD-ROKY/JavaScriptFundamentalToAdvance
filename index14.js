for(var i=1; i<=25; i++){
    if(i==10){
        break;
    }
    document.write("<br/><br/>"+" "+i);
}
document.write("<br/>"+"End");



for(var i=1; i<=25; i++){
    document.write("<br/><br/>"+" "+i);
    if(i==10){
        break;
    }
}
document.write("<br/></br>"+"End");



for(var i=1; i<=25; i++){
    if(i==10){
        continue;
    }
    for(var i=1; i<=25; i++){
        document.write("<br/><br/>"+" "+i);
        if(i==10){
            break;
        }
    }
    document.write("<br/>"+"End");
}
document.write("<br/>"+"End");