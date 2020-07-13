import React from "react";
import { getSuggestions } from "../redux/suggestions/actions";
import { connect } from "react-redux";

export const Suggestions = {
    render() {
        return (
            <div className="suggestions">
                <h4>Other also viewed: </h4>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions.suggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSuggestions = (horoscope, gender) => {
            dispatch(getSuggestions(horoscope, gender))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);