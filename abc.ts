class Facebook
{
   constructor(public birthDay: string, public Education: string, public currentCity:string, public Music:string,public likes:string,public tvProgram:string ,public isStatusSingle:boolean, public LifeEvents?:string ) 
   {
       this.birthDay=birthDay;
       this.Education=Education;
       this.currentCity=currentCity;
       this.Music=Music;
       this.likes=likes;
       this.tvProgram=tvProgram;
       this.isStatusSingle=isStatusSingle;
       this.LifeEvents=LifeEvents
   }

getbirthDay=()=>
{
    return this.birthDay
}

getEducation=()=>
{
    return this.Education
} 

getcurrentCity=()=>
{
    return this.currentCity
}

getMusic=()=>
{
    return this.Music
}
getlikes=()=>
{
    return this.likes
}

gettvProgram=()=>
{
    return this.tvProgram
}

getisStatusSingle=()=>
{
    return this.isStatusSingle

}

getLifeEvents=()=>
{
    return this.LifeEvents
}



}

let User1 = new Facebook("26-jan 1996","Dav school","Ranchi","Justin Bieber, Pitbull", "‎RoyalChallengersBangalore, MsDhoni fanclub", "Quantico",true)
console.log(User1.getbirthDay())
console.log(User1.getEducation())
console.log(User1.getcurrentCity())
console.log(User1.getMusic())
console.log(User1.getlikes())
console.log(User1.gettvProgram())
console.log(User1.getisStatusSingle())

let User2 = new Facebook("19-may 1994","Dps school","Delhi","Sonu nigam, Atif aslam ", "‎Delhi Daredevils, Kohli fanclub", "Game of Thrones",false)
console.log(User2.getbirthDay())
console.log(User2.getEducation())
console.log(User2.getcurrentCity())
console.log(User2.getMusic())
console.log(User2.getlikes())
console.log(User2.gettvProgram())
console.log(User2.getisStatusSingle())
