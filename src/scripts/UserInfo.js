export default class UserInfo{
    constructor({profileTitle, profileSubtitle}){
        this._profileTitle = document.querySelector(profileTitle);
        this._profileSubtitle =  document.querySelector(profileSubtitle);
    }

    getUserInfo(){
        const profileInfo = {};
        profileInfo.profileName = this._profileTitle.textContent;
        profileInfo.info = this._profileSubtitle.textContent;
        return profileInfo;
    }

    setUserInfo(profileInfo){
        this._profileTitle.textContent = profileInfo.profileName;
        this._profileSubtitle.textContent = profileInfo.info;
    }
}