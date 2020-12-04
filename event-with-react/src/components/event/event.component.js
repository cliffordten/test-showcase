import React from 'react'
import PropTypes from 'prop-types'
import './event.styles.scss';

const Event = props => {
    return (
        <div className="row event">
            <div className="col event_date">
                <h3>11<span>th</span> Nov</h3>
            </div>
            <div className="col event_info">
                <div className="row event_name">
                    <h3>Sunday Supper Club</h3>
                </div>
                <div className="row event_desc">
                    <p>A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn cooking methods from top Chef alkjd lakdjf alkdjfa dlfkajd alsdkfja dsfa</p>
                </div>
            </div>
            <div className="col event_venu">
                <div className="row event_time">
                    <h3>16:00 - 19:00</h3>
                </div>
                <div className="row event_loc">
                    <p>144 W Elim St, Chicago. IL 60610, USA</p>
                </div>
            </div>
            <div className="row event_detail_btn">
                    <button type="button">+ Event Details</button>
                </div>
        </div>

    )
}

Event.propTypes = {

}

export default Event
