import nostr from "./resources/nostr.jpeg";

function LandingPage(){
    return(
        <>
<div className="landing">
    <img src={nostr} alt="phtoto" className="sec1"/>
    <h1 className="sec1text">Realtime<br></br>
      collaboratin Powered<br></br>
      by Nostr
      </h1>
      <button className="started2">Get Started</button>

</div>
<div className="all">

</div>
</>
    )
}
export default LandingPage;