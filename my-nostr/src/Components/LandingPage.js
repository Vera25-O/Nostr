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
<h1 className="sec2text">
The doc that brings it<br></br>
all together.
      </h1>
      <p className="section2p">Unlike niche workflow tools, Nostr comes with a set of<br></br>
         powerful building blocks, so you can create the tools your<br></br>
          team needs.</p>
          
</div>
</>
    )
}
export default LandingPage;