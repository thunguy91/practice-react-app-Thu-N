import ProfileCard from "./ProfileCard";

function ProfileContainer(){
    return (
        <div className="profile-container">
            <ProfileCard
                name="Alex"
                age={25}
                bio="A software engineer who loves hiking."
            />

            <ProfileCard
                name="Taylor"
                age={30}
                bio="A designer passionate about photography."
            />
        
        </div>
    )
}


export default ProfileContainer;