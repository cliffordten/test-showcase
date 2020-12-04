import React from 'react'
import PropTypes from 'prop-types'
import './event.styles.scss';

const Event = ({date, title, desc, time, loc}) => {
    const dateArray = date.split(' ')
    return (
        <div className="row event">
            <div className="col event_date">
                <h3>{parseInt(dateArray[0].substring(0, 2))}<span>{dateArray[0].substring(dateArray[0].length - 2, dateArray[0].length)}</span> {dateArray[1]}</h3>
            </div>
            <div className="col event_info">
                <div className="row event_name">
                    <h3>{title}</h3>
                </div>
                <div className="row event_desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="col event_venu">
                <div className="row event_time">
                    <h3>{time}</h3>
                </div>
                <div className="row event_loc">
                    <p>{loc}</p>
                </div>
            </div>
            <div className="row event_detail_btn">
                    <button type="button">+ Event Details</button>
                </div>
        </div>

    )
}

Event.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    loc: PropTypes.string.isRequired 
}

export default Event
