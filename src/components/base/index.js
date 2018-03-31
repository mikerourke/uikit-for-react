import React from 'react';
import Base from './Base';

export default Base;
export const Block = props => <Base {...props} as="div" />;
export const Span = props => <Base {...props} as="span" />;
export const Paragraph = props => <Base {...props} as="p" />;

/**
 * These are embedded content items.  The <svg> and <video> elements are
 *    already present in the /utility directory.
 * @see https://getuikit.com/docs/base#embedded-content
 */
export const Audio = props => <Base {...props} as="audio" />;
export const Canvas = props => <Base {...props} as="canvas" />;
export const Image = props => <Base {...props} as="img" />;
