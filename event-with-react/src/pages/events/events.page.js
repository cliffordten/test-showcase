import React from 'react';
import PropTypes from 'prop-types';
import './events.styles.scss';
import Event from '../../components/event/event.component';

function EventPage(props) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="event_title">
                        <h2>Events</h2>
                    </div>
                </div>
                <div className="row event_container">
               <Event/>
               </div>
            </div>
        </div>
    )
}

EventPage.propTypes = {

}

export default EventPage

