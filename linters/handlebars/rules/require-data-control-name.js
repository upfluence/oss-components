/* global require module */
const { Rule } = require('ember-template-lint');

const nativeInteractiveTags = ['button', 'input', 'textarea', 'a'];

const excludedOSSComponents = [
  'OSS::StackContainer',
  'OSS::Panel::Row',
  'OSS::ContentPanel',

  // Display and visual components
  'OSS::Illustration',
  'OSS::Icon',
  'OSS::Badge',
  'OSS::Skeleton',
  'OSS::PulsatingDot',
  'OSS::ProgressBar',
  'OSS::Tip',
  'OSS::Banner',
  'OSS::Alert',
  'OSS::EmptyState',
  'OSS::InformationSection',

  // Attribute display components (non-interactive)
  'OSS::Attribute::Text',
  'OSS::Attribute::RemovableText',

  // Avatar components (display only)
  'OSS::Avatar',
  'OSS::AvatarGroup',

  // Layout components
  'OSS::Layout::Sidebar',
  'OSS::Layout::Sidebar::Item',
  'OSS::Layout::Navbar::NavItem',

  // Other non-interactive components
  'OSS::CodeBlock',
  'OSS::CompletionBadge'
];

class RequireDataControlName extends Rule {
  constructor(options) {
    super(options);
  }

  visitor() {
    return {
      ElementNode: (node) => {
        if (this.isInteractiveElement(node)) {
          if (!this.hasDataControlName(node)) {
            this.log({
              message: `Interactive element <${node.tag}> requires a data-control-name attribute`,
              node
            });
          }
        }
      }
    };
  }

  isInteractiveElement(node) {
    if (nativeInteractiveTags.includes(node.tag)) return true;

    if (
      node.modifiers?.some((modifier) => {
        if (modifier.path?.original !== 'on') return false;
        if ((modifier.params?.length || 0) === 0) return true;

        const eventName = modifier.params[0];
        return (
          eventName.type === 'StringLiteral' &&
          ['click', 'submit', 'keydown', 'keyup', 'keypress'].includes(eventName.value)
        );
      })
    )
      return true;

    if (node.tag.startsWith('OSS::')) {
      return !excludedOSSComponents.includes(node.tag);
    }

    return false;
  }

  hasDataControlName(node) {
    if (!node.attributes) {
      return false;
    }

    return node.attributes.some((attr) => attr.name === 'data-control-name');
  }
}

module.exports = RequireDataControlName;
