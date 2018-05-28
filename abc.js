var Facebook = /** @class */ (function () {
    function Facebook(birthDay, Education, currentCity, Music, likes, tvProgram, isStatusSingle, LifeEvents) {
        var _this = this;
        this.birthDay = birthDay;
        this.Education = Education;
        this.currentCity = currentCity;
        this.Music = Music;
        this.likes = likes;
        this.tvProgram = tvProgram;
        this.isStatusSingle = isStatusSingle;
        this.LifeEvents = LifeEvents;
        this.getbirthDay = function () {
            return _this.birthDay;
        };
        this.getEducation = function () {
            return _this.Education;
        };
        this.getcurrentCity = function () {
            return _this.currentCity;
        };
        this.getMusic = function () {
            return _this.Music;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.gettvProgram = function () {
            return _this.tvProgram;
        };
        this.getisStatusSingle = function () {
            return _this.isStatusSingle;
        };
        this.getLifeEvents = function () {
            return _this.LifeEvents;
        };
        this.birthDay = birthDay;
        this.Education = Education;
        this.currentCity = currentCity;
        this.Music = Music;
        this.likes = likes;
        this.tvProgram = tvProgram;
        this.isStatusSingle = isStatusSingle;
        this.LifeEvents = LifeEvents;
    }
    return Facebook;
}());
var User1 = new Facebook("26-jan 1996", "Dav school", "Ranchi", "Justin Bieber, Pitbull", "‎RoyalChallengersBangalore, MsDhoni fanclub", "Quantico", true);
console.log(User1.getbirthDay());
console.log(User1.getEducation());
console.log(User1.getcurrentCity());
console.log(User1.getMusic());
console.log(User1.getlikes());
console.log(User1.gettvProgram());
console.log(User1.getisStatusSingle());
var User2 = new Facebook("19-may 1994", "Dps school", "Delhi", "Sonu nigam, Atif aslam ", "‎Delhi Daredevils, Kohli fanclub", "Game of Thrones", false);
console.log(User2.getbirthDay());
console.log(User2.getEducation());
console.log(User2.getcurrentCity());
console.log(User2.getMusic());
console.log(User2.getlikes());
console.log(User2.gettvProgram());
console.log(User2.getisStatusSingle());
