import nostr from "./resources/nostr.jpeg";

function LandingPage(){
    return(
        <>
<div className="landing">
    {/* section1 */}
    <img src={nostr} alt="phtoto" className="sec1"/>
    <h1 className="sec1text">Realtime<br></br>
      collaboratin Powered<br></br>
      by Nostr
      </h1>
      <button className="started2">Get Started</button>

</div>
{/* section2 */}
<div className="all">
    <p className="use">Used by over 90% of the Precious 100</p>
<hr></hr>
</div>
</>
    )
}
export default LandingPage;