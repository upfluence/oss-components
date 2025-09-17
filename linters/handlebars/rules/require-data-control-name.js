'use strict';

const Rule = require('ember-template-lint/lib/rules/_base');

module.exports = class RequireDataControlName extends Rule {
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
    const nativeInteractiveTags = ['button', 'input', 'select', 'textarea', 'a', 'area', 'details', 'summary'];

    if (nativeInteractiveTags.includes(node.tag)) {
      return true;
    }

    if (node.attributes) {
      const interactiveAttributes = [
        'onclick',
        'onchange',
        'onsubmit',
        'onfocus',
        'onblur',
        'onkeydown',
        'onkeyup',
        'onkeypress',
        'onmousedown',
        'onmouseup',
        'onmouseover',
        'onmouseout',
        'tabindex'
      ];

      const hasInteractiveAttribute = node.attributes.some(
        (attr) => interactiveAttributes.includes(attr.name) || attr.name.startsWith('on')
      );

      if (hasInteractiveAttribute) {
        return true;
      }

      const roleAttribute = node.attributes.find((attr) => attr.name === 'role');
      if (roleAttribute) {
        const interactiveRoles = [
          'button',
          'link',
          'menuitem',
          'menuitemcheckbox',
          'menuitemradio',
          'option',
          'tab',
          'treeitem',
          'checkbox',
          'radio',
          'switch',
          'slider',
          'spinbutton',
          'textbox',
          'combobox',
          'listbox',
          'grid',
          'gridcell',
          'columnheader',
          'rowheader',
          'row',
          'cell',
          'tree',
          'treegrid',
          'tablist',
          'tabpanel',
          'menu',
          'menubar',
          'toolbar',
          'tooltip',
          'dialog',
          'alertdialog'
        ];

        if (interactiveRoles.includes(roleAttribute.value)) {
          return true;
        }
      }
    }

    if (node.modifiers) {
      const hasOnModifier = node.modifiers.some((modifier) => modifier.path && modifier.path.original === 'on');

      if (hasOnModifier) {
        return true;
      }
    }

    const emberInteractiveComponents = [
      'OSS::AccessPanel',
      'OSS::Alert',
      'OSS::Anchor',
      'OSS::ArrayInput',
      'OSS::Attribute::Country',
      'OSS::Attribute::PhoneNumber',
      'OSS::Attribute::Rating',
      'OSS::Attribute::RemovableText',
      'OSS::Attribute::RevealableEmail',
      'OSS::Attribute::TagArray',
      'OSS::Attribute::Text',
      'OSS::AttributesPanel',
      'OSS::AvatarGroup',
      'OSS::Avatar',
      'OSS::Banner',
      'OSS::ButtonDropdown',
      'OSS::Button',
      'OSS::Carousel',
      'OSS::Checkbox',
      'OSS::Chip',
      'OSS::CompletionBadge',
      'OSS::ContentPanel',
      'OSS::Copy',
      'OSS::CountrySelector',
      'OSS::CurrencyInput',
      'OSS::EmailInput',
      'OSS::EmptyState',
      'OSS::ExpandableBadge',
      'OSS::Illustration',
      'OSS::InfiniteSelect',
      'OSS::InformationSection',
      'OSS::InputContainer',
      'OSS::InputGroup',
      'OSS::Layout::Navbar::NavItem',
      'OSS::Layout::Sidebar',
      'OSS::Layout::Sidebar::Item',
      'OSS::Link',
      'OSS::ModalDialog',
      'OSS::Modal',
      'OSS::ModeSwitch',
      'OSS::NavTab',
      'OSS::NumberInput',
      'OSS::Panel',
      'OSS::Panel::Row',
      'OSS::PasswordInput',
      'OSS::PhoneNumberInput',
      'OSS::Popover',
      'OSS::PowerSelect',
      'OSS::ProgressBar',
      'OSS::RadioButton',
      'OSS::ScrollablePanel',
      'OSS::SearchField',
      'OSS::Select',
      'OSS::SidePanel',
      'OSS::SidePanel::Header',
      'OSS::Slider',
      'OSS::Smart::Pill',
      'OSS::SocialPostBadge',
      'OSS::SplitModal',
      'OSS::StackContainer',
      'OSS::StarRating',
      'OSS::TextArea',
      'OSS::TogglableSection',
      'OSS::ToggleButtons',
      'OSS::ToggleSwitch',
      'OSS::UploadArea',
      'OSS::UploadItem',
      'OSS::UrlInput'
    ];

    if (emberInteractiveComponents.includes(node.tag)) {
      return true;
    }

    return false;
  }

  hasDataControlName(node) {
    if (!node.attributes) {
      return false;
    }

    return node.attributes.some((attr) => attr.name === 'data-control-name');
  }
};
