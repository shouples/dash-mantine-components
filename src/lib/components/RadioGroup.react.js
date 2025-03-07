import React from "react";
import { RadioGroup as MantineRadioGroup, Radio } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
 */
const RadioGroup = (props) => {
    const { setProps, data, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineRadioGroup
            onChange={updateProps}
            {...omit(["setProps", "data", "class_name"], props)}
            className={class_name}
        >
            {data.map((radio, index) => {
                return (
                    <Radio value={radio.value} key={index}>
                        {radio.label}
                    </Radio>
                );
            })}
        </MantineRadioGroup>
    );
};

RadioGroup.displayName = "RadioGroup";

RadioGroup.defaultProps = {};

RadioGroup.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Active radio color from theme.colors
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * RadioGroup options
     */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * The option's label
             */
            label: PropTypes.string.isRequired,
            /**
             * Option's value
             */
            value: PropTypes.string.isRequired,
        })
    ),

    /**
     * Input description, displayed after label
     */
    description: PropTypes.string,

    /**
     * Displays error message after input
     */
    error: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.string,

    /**
     * Adds red asterisk on the right side of label
     */
    required: PropTypes.bool,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Predefined label fontSize, radio width, height and border-radius
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Spacing between radios in horizontal variant
     */
    spacing: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Value of currently selected radio (controlled)
     */
    value: PropTypes.string,

    /**
     * Radios position
     */
    variant: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default RadioGroup;
