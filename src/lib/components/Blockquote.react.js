import { Blockquote as MantineBlockquote } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/
 */
const Blockquote = (props) => {
    const { children, class_name } = props;

    return (
        <MantineBlockquote
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineBlockquote>
    );
};

Blockquote.displayName = "Blockquote";

Blockquote.defaultProps = {};

Blockquote.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Describe a reference to a cited quote
     */
    cite: PropTypes.string,

    /**
     * Badge color from theme
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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Blockquote;
