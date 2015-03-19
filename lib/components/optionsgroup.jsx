/** @jsx React.DOM */

"use strict";

var React = require("react");
var _ = require("underscore");
var OptionButtons = require("./optionbuttons.jsx");

/**
 * Wraps the optionbutton widget
 */
var OptionsGroup = React.createClass({

    displayName: "OptionsGroup",

    render: function() {
        var {attr, ...others} = this.props;
        return (
            <Group attr={attr}>
                <OptionButtons {...others}/>
            </Group>
        );
    }
});

module.exports = OptionsGroup;