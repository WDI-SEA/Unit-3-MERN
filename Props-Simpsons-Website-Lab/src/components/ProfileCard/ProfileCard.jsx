import './ProfileCard.css'

export default function ProfileCard(props) {
    return(
        <div id="single-article-1" className="single-article">
            <div id="card-front-1" className="front-card tb-card">
                <img src={props.pic} className="profile-image" alt='' />
                <div className="single-content">
                    <div className="card-middle">
                        <h1>Name Here</h1>
                        <p className="team-p1">
                            Description here description here description here description here description here description here description here description here description here description here description here description here description here ... 
                        </p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-email">
                            insert@email.here
                        </div>
                        <div className="card-icon profile-trigger" data-id="single-article-1" >
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}