import "./Shared.css"
export default function Shared()
{
    return (
        <div className="shared">
            <div className="sharedWrapper">
                <div className="sharedTop">
                    <img className="sharedProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input className="sharedInput" placeholder="What's on Your Mind ?"/>
                </div>
                <div className="sharedBottom"></div>
            </div>
            
        </div>
    );   
}