import React, { useState } from "react";
import "./BookingForm.css";

// Icons
import { TfiLocationPin } from "react-icons/tfi";
import {
    AiOutlineCalendar,
    AiOutlineClockCircle,
    AiOutlineSearch,
} from "react-icons/ai";

// flatpicker css link
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
    const [selected_date, set_selected_date] = useState("");
    // console.log(selected_date);
    const navigate = useNavigate();

    const handleBookingForm = (e) => {
        e.preventDefault();
        navigate("/Rider-Frontend/booking-page");
    };
    return (
        <>
            <section className="booking-form-wrapper">
                <div className="sec-container booking-form-container">
                    <SecTitle title="search & book" des="" clr="#fff" />

                    <form
                        action=""
                        className="form-container"
                        onSubmit={handleBookingForm}
                    >
                        {/* pickup location */}
                        <div className="input-group">
                            <h5 className="input-title">pickup location:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="pickup_location"
                                    className="input-label"
                                >
                                    <TfiLocationPin />
                                </label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Pickup Location"
                                />
                            </div>
                        </div>
                        {/* pickup date */}
                        <div className="input-group">
                            <h5 className="input-title">pickup date:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="pickup_date"
                                    className="input-label"
                                >
                                    <AiOutlineCalendar />
                                </label>
                                <Flatpickr
                                    className="input"
                                    value={selected_date}
                                    options={{
                                        minDate: new Date(),
                                        enableTime: false,
                                        altInput: true,
                                        altFormat: "d M Y",
                                        dateFormat: "Y-m-d",
                                    }}
                                    onChange={(v) => {
                                        console.log(v);
                                    }}
                                    placeholder="Pickup date"
                                />
                            </div>
                        </div>
                        {/* pickup time */}
                        <div className="input-group">
                            <h5 className="input-title">pickup time:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="pickup_time"
                                    className="input-label"
                                >
                                    <AiOutlineClockCircle />
                                </label>
                                <Flatpickr
                                    className="input"
                                    value={selected_date}
                                    options={{
                                        enableTime: true,
                                        time_24hr: false,
                                        minTime:
                                            new Date().getTime() % 12 || 12,
                                        altInput: true,
                                        altFormat: "H:i",
                                        dateFormat: "H:i",
                                        noCalendar: true,
                                    }}
                                    onChange={(v) => {
                                        console.log(v);
                                    }}
                                    placeholder="Pickup Time"
                                />
                            </div>
                        </div>
                        {/* drop location */}
                        <div className="input-group">
                            <h5 className="input-title">drop location:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="drop_location"
                                    className="input-label"
                                >
                                    <TfiLocationPin />
                                </label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="drop Location"
                                />
                            </div>
                        </div>
                        {/* drop date */}
                        <div className="input-group">
                            <h5 className="input-title">drop date:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="drop_date"
                                    className="input-label"
                                >
                                    <AiOutlineCalendar />
                                </label>
                                <Flatpickr
                                    className="input"
                                    value={selected_date}
                                    options={{
                                        minDate: new Date(),
                                        enableTime: false,
                                        altInput: true,
                                        altFormat: "d M Y",
                                        dateFormat: "Y-m-d",
                                    }}
                                    onChange={(v) => {
                                        console.log(v);
                                    }}
                                    placeholder="drop date"
                                />
                            </div>
                        </div>
                        {/* drop time */}
                        <div className="input-group">
                            <h5 className="input-title">drop time:</h5>
                            <div className="input-field">
                                <label
                                    htmlFor="drop_time"
                                    className="input-label"
                                >
                                    <AiOutlineClockCircle />
                                </label>
                                <Flatpickr
                                    className="input"
                                    value={selected_date}
                                    options={{
                                        enableTime: true,
                                        time_24hr: false,
                                        minTime:
                                            new Date().getTime() % 12 || 12,
                                        altInput: true,
                                        altFormat: "H:i",
                                        dateFormat: "H:i",
                                        noCalendar: true,
                                    }}
                                    onChange={(v) => {
                                        console.log(v);
                                    }}
                                    placeholder="drop Time"
                                />
                            </div>
                        </div>

                        {/* submit button */}
                        <div className="submit-btn-container">
                            <button className="submit-btn" type="submit">
                                <label
                                    htmlFor="search_icon"
                                    className="search_icon"
                                >
                                    <AiOutlineSearch />
                                </label>{" "}
                                search
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default BookingForm;
