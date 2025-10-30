import {Link} from "react-router-dom"

const ContactBlock = () => {
    return (
        <div className="contact-block">
            <div className="top">
                <div className="left">
                    <h4>Shope</h4>
                    <div className="links">
                        <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>WOMEN</Link>
                        <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>MEN</Link>
                        <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>KIDS</Link>
                        <Link to="/" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>HOME</Link>
                    </div>
                </div>
                <div className="right">
                    <h4>SITES&STORES</h4>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>ABOUT US</Link>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>CONTACT US</Link>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>STORE LOCATION</Link>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>MEDIA CENTER</Link>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>SITE MAP</Link>
                    <Link to="#" style={{"textDecoration":"none","color":"white","fontSize":"0.8em","opacity":"0.9"}}>MEMBERSHIP</Link>
                </div>
            </div><hr />
            <div className="last">
                <p>terms & condition</p>
                <p>privacy policy</p>
                <p>return policy</p>
                <p>cookie policy</p>
                <p>gst benefits</p>
            </div>
        </div>
    )
}

export default ContactBlock
