import React from "react";
import { InputWrapper as MantineInputWrapper } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Enhance custom inputs with label, error and description. For more information, see: https://mantine.dev/core/input-wrapper/
 */
const InputWrapper = (props) => {
    const { class_name } = props;

    return (
        <MantineInputWrapper
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineInputWrapper>
    );
};

InputWrapper.displayName = "InputWrapper";

InputWrapper.defaultProps = {};

InputWrapper.propTypes = {
    /**
     * Input that should be wrapped
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default InputWrapper;
