import React from "react";
import { Select as MatineSelect } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Custom searchable select. For more information, see: https://mantine.dev/core/select/
 */
const Select = (props) => {
    const { setProps, data, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MatineSelect
            {...omit(["setProps", "data", "class_name"], props)}
            className={class_name}
            data={data}
            onChange={updateProps}
        />
    );
};

Select.displayName = "Select";

Select.defaultProps = {
    searchable: true,
    placeholder: "Select item",
    data: [],
    nothingFound: "No match found",
};

Select.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Allow to clear value
     */
    clearable: PropTypes.bool,

    /**
     * Select options used to renderer items in dropdown
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
            /**
             * If true, this option is disabled and cannot be selected
             */
            disabled: PropTypes.bool,
        })
    ),

    /**
     * Input description, displayed after label
     */
    description: PropTypes.string,

    /**
     * The component can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Dropdown positioning behavior
     */
    dropdownPosition: PropTypes.oneOf(["bottom", "top", "flip"]),

    /**
     * Displays error message after input
     */
    error: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Initial dropdown opened state
     */
    initiallyOpened: PropTypes.bool,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.string,

    /**
     * Limit amount of items displayed at a time for searchable select
     */
    limit: PropTypes.number,

    /**
     * Maximum dropdown height in px
     */
    maxDropdownHeight: PropTypes.number,

    /**
     * Will input have multiple lines?
     */
    multiline: PropTypes.bool,

    /**
     * Nothing found label
     */
    nothingFound: PropTypes.string,

    /**
     * Placeholder, displayed when date is not selected
     */
    placeholder: PropTypes.string,

    /**
     * Input border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),
    /**
     * Adds red asterisk on the right side of label
     */
    required: PropTypes.bool,

    /**
     * Set to true to enable search
     */
    searchable: PropTypes.bool,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Selected value
     */
    value: PropTypes.string,

    /**
     * Whether to render the dropdown in a Portal
     */
    withinPortal: PropTypes.bool,

    /**
     * Dropdown z-index
     */
    zIndex: PropTypes.number,
};

export default Select;
